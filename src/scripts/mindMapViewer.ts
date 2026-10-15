class MindMapViewer extends HTMLElement {
  private observer?: ResizeObserver;
  private cleanup?: () => void;

  connectedCallback() {
    if (this.cleanup) return;
    const viewport = this.querySelector<HTMLElement>('[data-map-viewport]');
    const image = this.querySelector<HTMLImageElement>('[data-map-image]');
    const toolbar = this.querySelector<HTMLElement>('[data-map-toolbar]');
    const output = this.querySelector<HTMLOutputElement>('output');
    if (!viewport || !image || !toolbar || !output) return;

    let scale = 1;
    let mode: 'width' | 'fit' | 'manual' = 'width';
    let frame = 0;
    let ready = false;
    const buttons = [...toolbar.querySelectorAll<HTMLButtonElement>('button')];
    const draw = (next: number, preserveCenter = false) => {
      if (!image.naturalWidth || !viewport.clientWidth || !viewport.clientHeight) return;
      const bounds = image.getBoundingClientRect();
      const area = viewport.getBoundingClientRect();
      const x = bounds.width ? (area.left + viewport.clientWidth / 2 - bounds.left) / bounds.width : 0.5;
      const y = bounds.height ? (area.top + viewport.clientHeight / 2 - bounds.top) / bounds.height : 0;
      scale = Math.min(2, Math.max(0.01, next));
      this.style.setProperty('--map-width', `${image.naturalWidth * scale}px`);
      output.value = `${Math.round(scale * 100)}%`;
      buttons.forEach(button => {
        button.disabled = (button.dataset.mapAction === 'in' && scale >= 2)
          || (button.dataset.mapAction === 'out' && scale <= 0.01);
      });
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (preserveCenter) {
          const updated = image.getBoundingClientRect();
          viewport.scrollLeft += updated.left - area.left + Math.max(0, Math.min(1, x)) * updated.width - viewport.clientWidth / 2;
          viewport.scrollTop += updated.top - area.top + Math.max(0, Math.min(1, y)) * updated.height - viewport.clientHeight / 2;
        } else {
          viewport.scrollLeft = 0;
          viewport.scrollTop = 0;
        }
      });
    };
    const resize = () => {
      if (!image.naturalWidth || !viewport.clientWidth) return;
      ready = true;
      toolbar.hidden = false;
      if (mode === 'manual') return;
      const widthScale = (viewport.clientWidth - 24) / image.naturalWidth;
      draw(mode === 'fit' ? Math.min(widthScale, (viewport.clientHeight - 24) / image.naturalHeight) : widthScale);
    };
    const onAction = (event: Event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button[data-map-action]');
      if (!button || !ready) return;
      switch (button.dataset.mapAction) {
        case 'fit': mode = 'fit'; resize(); break;
        case 'width': mode = 'width'; resize(); break;
        case 'actual': mode = 'manual'; draw(1, true); break;
        case 'in': mode = 'manual'; draw(scale * 1.5, true); break;
        case 'out': mode = 'manual'; draw(scale / 1.5, true); break;
      }
    };
    toolbar.addEventListener('click', onAction);
    image.addEventListener('load', resize);
    this.observer = new ResizeObserver(resize);
    this.observer.observe(viewport);
    resize();
    this.cleanup = () => {
      toolbar.removeEventListener('click', onAction);
      image.removeEventListener('load', resize);
      this.observer?.disconnect();
      cancelAnimationFrame(frame);
    };
  }

  disconnectedCallback() {
    this.cleanup?.();
    this.cleanup = undefined;
  }
}

if (!customElements.get('mind-map-viewer')) {
  customElements.define('mind-map-viewer', MindMapViewer);
}
