export interface Moment {
  id: number;
  type: 'travel' | 'daily' | 'thought' | 'learning' | 'project';
  title: string;
  content: string;
  date: string;
  location: string;
  tags: string[];
  images: string[];
  likes: number;
  comments: number;
}

export const momentsData: Record<string, Moment[]> = {
  zh: [
    {
      id: 1,
      type: 'daily',
      title: '周五啦～',
      content: '一周终于结束了，今晚准备好好放松一下。最近在改博客的瞬间页面，把时间轴改成了动态流风格，感觉更像朋友圈了。',
      date: '2026-05-22',
      location: '东京，日本',
      tags: ['日常', '周五', '博客'],
      images: [],
      likes: 3,
      comments: 1,
    },
  ],
  en: [
    {
      id: 1,
      type: 'daily',
      title: 'Friday Vibes~',
      content: 'The week is finally over. Gonna relax tonight. Been working on the Moments page — switched from a timeline to a feed style, feels more like a personal social wall now.',
      date: '2026-05-22',
      location: 'Tokyo, Japan',
      tags: ['Daily', 'Friday', 'Blog'],
      images: [],
      likes: 3,
      comments: 1,
    },
  ],
  ja: [
    {
      id: 1,
      type: 'daily',
      title: '金曜日だ〜',
      content: '一週間がようやく終わった。今夜はゆっくり休もう。最近ブログの「瞬間」ページをタイムラインからフィード風に変えて、より個人のSNSみたいになった。',
      date: '2026-05-22',
      location: '東京，日本',
      tags: ['日常', '金曜日', 'ブログ'],
      images: [],
      likes: 3,
      comments: 1,
    },
  ],
};
