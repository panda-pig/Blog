export interface Moment {
  id: number;
  type: 'travel' | 'daily' | 'thought' | 'learning' | 'project';
  title: string;
  content: string;
  date: string;
  location: string;
  tags: string[];
  images: string[];
}

export const momentsData: Record<string, Moment[]> = {
  zh: [
    {
      id: 3,
      type: 'project',
      title: 'Codebase Memory MCP',
      content: 'codebase-memory-mcp牛逼',
      date: '2026-06-30',
      location: '东京，日本',
      tags: ['工具', 'MCP', 'Codebase Memory'],
      images: ['/images/moments/codebase-memory-mcp.jpg'],
    },
    {
      id: 2,
      type: 'daily',
      title: '耳机以身殉职',
      content: '🥲',
      date: '2026-06-10',
      location: '东京，日本',
      tags: ['日常', '翻车', 'emo'],
      images: ['/images/moments/airpods-toilet.jpg'],
    },
    {
      id: 1,
      type: 'daily',
      title: '周五啦～',
      content: '一周终于结束了～最近在改博客的界面和做一些小工具。希望周末我可以赶紧把想写的文章写完🤣',
      date: '2026-05-22',
      location: '东京，日本',
      tags: ['日常', '周五', '博客'],
      images: ['/images/moments/friday.jpg'],
    },
  ],
  en: [
    {
      id: 3,
      type: 'project',
      title: 'Codebase Memory MCP',
      content: 'codebase-memory-mcp rocks',
      date: '2026-06-30',
      location: 'Tokyo, Japan',
      tags: ['Tools', 'MCP', 'Codebase Memory'],
      images: ['/images/moments/codebase-memory-mcp.jpg'],
    },
    {
      id: 2,
      type: 'daily',
      title: 'My Earbud Died in the Line of Duty',
      content: '🥲',
      date: '2026-06-10',
      location: 'Tokyo, Japan',
      tags: ['Daily', 'Oops', 'emo'],
      images: ['/images/moments/airpods-toilet.jpg'],
    },
    {
      id: 1,
      type: 'daily',
      title: 'Friday Vibes~',
      content: 'The week is finally over~ Been tweaking the blog UI and building some small tools. Hope I can finish writing those articles over the weekend 🤣',
      date: '2026-05-22',
      location: 'Tokyo, Japan',
      tags: ['Daily', 'Friday', 'Blog'],
      images: ['/images/moments/friday.jpg'],
    },
  ],
  ja: [
    {
      id: 3,
      type: 'project',
      title: 'Codebase Memory MCP',
      content: 'codebase-memory-mcp最高',
      date: '2026-06-30',
      location: '東京，日本',
      tags: ['ツール', 'MCP', 'Codebase Memory'],
      images: ['/images/moments/codebase-memory-mcp.jpg'],
    },
    {
      id: 2,
      type: 'daily',
      title: 'イヤホン、殉職',
      content: '🥲',
      date: '2026-06-10',
      location: '東京，日本',
      tags: ['日常', 'やらかし', 'emo'],
      images: ['/images/moments/airpods-toilet.jpg'],
    },
    {
      id: 1,
      type: 'daily',
      title: '金曜日だ〜',
      content: '一週間がようやく終わった〜ブログのUIをいじったり、小さなツールを作ったりしてた。週末に書きたい記事を早く仕上げられるといいな🤣',
      date: '2026-05-22',
      location: '東京，日本',
      tags: ['日常', '金曜日', 'ブログ'],
      images: ['/images/moments/friday.jpg'],
    },
  ],
};
