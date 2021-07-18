import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'ポートフォリオ|Matsuzawa', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, ja
  description: 'マツザワのポートフォリオサイトです。', // e.g: Welcome to my website
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  name: 'Matsuzawa',
  age: '　1994年生まれ',
  paragraphOne:
    'PHP、javascript、VB、VBA、Vue.js、Reactなどなど幅広く触れてきましたが、WEB系が好みです。',
  paragraphTwo:
    '2年程度システムエンジニアとして働いていました。VB.Net、VB、VBA、PHP等を使い社内アプリケーションの機能追加等の開発業務を行っていました。',
  paragraphThree:
    'その後、地域おこし協力隊として小千谷市に移住。WEBサイト制作をしたりと情報発信をする傍ら、Vue.js、Reactなど触っていました。',
  paragraphFour: '趣味は写真撮影とコーヒー。コーヒーはオリジナルブレンドを作ったりしています。',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mtfarmSite.jpg',
    title: '株式会社Mt.ファームわかとち',
    category: 'WEBサイト制作',
    info: '株式会社Mt.ファームわかとち様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。\n既存のテーマのカスタマイズです。',
    language: 'PHP, JavaScript, Jquery, CSS, HTML, SASS',
    framework: 'Bootstrap',
    other: 'WordPress',
    url: 'https://wakatochi.jp',
  },
  {
    id: nanoid(),
    img: 'okkonokiSite.jpg',
    title: '古民家民宿おっこの木',
    category: 'WEBサイト制作',
    info: '「古民家民宿おっこの木」様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。このサイトはWordPressのスターターテーマ「Underscore」を使用し作成しています。軽量化のために極力プラグインの使用をやめています。',
    language: 'PHP, JavaScript, Jquery, CSS, HTML, SASS',
    other: 'WordPress',
    url: 'https://okkonoki.wakatochi.jp',
  },
  {
    id: nanoid(),
    img: 'myPortfolio.jpg',
    title: 'このサイト',
    category: 'WEBサイト制作',
    info: 'Gatsbyという静的サイトジェネレーターを使い作成。ホスティングはNetlifyを使用。WordPressよりも軽量！サイトのアップロードもFTPを使わなくてもいいので、管理が楽！',
    language: 'JavaScript, CSS, HTML, SASS',
    framework: 'React, Bootstrap',
    other: 'Gatsby',
    url: 'https://matsuzawa.dev',
  },
];
// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    icon: 'html-5.svg',
    name: 'HTML',
    level: 5,
  },
  {
    id: nanoid(),
    icon: 'css-3.svg',
    name: 'CSS',
    level: 5,
  },
  {
    id: nanoid(),
    icon: 'javascript.svg',
    name: 'JavaScript',
    level: 4,
  },
  {
    id: nanoid(),
    icon: 'php.svg',
    name: 'PHP',
    level: 4,
  },
  {
    id: nanoid(),
    icon: 'vue.svg',
    name: 'Vue',
    level: 3,
  },
  {
    id: nanoid(),
    icon: 'react.svg',
    name: 'React',
    level: 3,
  },
  {
    id: nanoid(),
    icon: 'sass.svg',
    name: 'Sass',
    level: 4,
  },
  {
    id: nanoid(),
    icon: 'mysql.svg',
    name: 'MySQL',
    level: 4,
  },
  {
    id: nanoid(),
    icon: 'wordpress-icon.svg',
    name: 'WordPress',
    level: 5,
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      icon: 'twitter.svg',
      url: 'https://twitter.com/matu_engineer',
    },
    {
      id: nanoid(),
      name: 'instagram',
      icon: 'instagram.svg',
      url: 'https://www.instagram.com/k_matu12/?hl=ja',
    },
    {
      id: nanoid(),
      name: 'github',
      icon: 'github.svg',
      url: 'https://github.com/matu12km',
    },
  ],
};
