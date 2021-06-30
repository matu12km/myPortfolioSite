import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'ポートフォリオ|Matsuzawa Kazuki', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matsuzawa Kazuki',
  subtitle: 'aaa',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.webp',
  paragraphOne:
    '新潟県の田舎WEBエンジニアです。PHP、javascript(Vue.js,React)、VB、VBAなどなどつまみ食いしています。',
  paragraphTwo: '2年と少しシステムエンジニアとして、VB、VBA、C#を主に使っていました。',
  paragraphThree:
    'その後、地域おこし協力隊として小千谷市に移住。WEBサイト制作をしたり、システム開発をしたり、勉強しながら色々と作っています。',
  paragraphFour: '趣味は写真撮影とコーヒー。コーヒーはオリジナルブレンドを作ったりしています。',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mtfarmSite.jpg',
    title: '株式会社Mt.ファームわかとち',
    category: 'WEBサイト制作',
    info: '株式会社Mt.ファームわかとち様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。',
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
    info: '「古民家民宿おっこの木」様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。',
    language: 'PHP, JavaScript, Jquery, CSS, HTML, SASS',
    other: 'WordPress',
    url: 'https://okkonoki.wakatochi.jp',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト',
    category: 'WEBサイト制作',
    info: 'Gatsbyという静的サイトジェネレーターを使い作成。ホスティングはNetlifyを使用。',
    language: 'JavaScript, CSS, HTML, SASS',
    framework: 'React, Bootstrap',
    other: 'Gatsby',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト1',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト2',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト3',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト4',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト5',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト6',
    category: 'WEBサイト制作',
    info: '以前から気になっていたgatsbyを使い作成。ホスティングはgithub Page',
    url: '#',
  },
];
// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    icon: 'html-5.svg',
    name: 'HTML5',
    level: 5,
  },
  {
    id: nanoid(),
    icon: 'css-3.svg',
    name: 'CSS3',
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
  ],
};
