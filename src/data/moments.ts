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
      content: '一周终于结束了～最近在改博客的界面和做一些小工具。希望周末我可以赶紧把想写的文章写完🤣',
      date: '2026-05-22',
      location: '东京，日本',
      tags: ['日常', '周五', '博客'],
      images: ['/images/moments/friday.jpg'],
      likes: 3,
      comments: 1,
    },
  ],
  en: [
    {
      id: 1,
      type: 'daily',
      title: 'Friday Vibes~',
      content: 'The week is finally over~ Been tweaking the blog UI and building some small tools. Hope I can finish writing those articles over the weekend 🤣',
      date: '2026-05-22',
      location: 'Tokyo, Japan',
      tags: ['Daily', 'Friday', 'Blog'],
      images: ['/images/moments/friday.jpg'],
      likes: 3,
      comments: 1,
    },
  ],
  ja: [
    {
      id: 1,
      type: 'daily',
      title: '金曜日だ〜',
      content: '一週間がようやく終わった〜ブログのUIをいじったり、小さなツールを作ったりしてた。週末に書きたい記事を早く仕上げられるといいな🤣',
      date: '2026-05-22',
      location: '東京，日本',
      tags: ['日常', '金曜日', 'ブログ'],
      images: ['/images/moments/friday.jpg'],
      likes: 3,
      comments: 1,
    },
  ],
};
