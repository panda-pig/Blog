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
      id: 2,
      type: 'daily',
      title: '耳机以身殉职',
      content: '低头的瞬间，耳机划了一道完美的抛物线，精准落进马桶。眼睁睁看着它沉下去，连一句再见都没来得及说。当场宣告退役，享年不到一年。提醒各位：低头玩手机要小心🥲',
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
      id: 2,
      type: 'daily',
      title: 'My Earbud Died in the Line of Duty',
      content: 'The moment I looked down, my earbud traced a perfect parabola straight into the toilet. I watched it sink, no time to even say goodbye. Retired on the spot, gone before its first birthday. PSA: be careful scrolling your phone while looking down 🥲',
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
      id: 2,
      type: 'daily',
      title: 'イヤホン、殉職',
      content: '下を向いた瞬間、イヤホンが綺麗な放物線を描いてトイレの中へ。沈んでいくのをただ見つめるだけ、さよならも言えなかった。その場で引退、享年一歳未満。みんなも下を向いてスマホをいじる時は気をつけて🥲',
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
