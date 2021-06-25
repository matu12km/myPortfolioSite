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
  name: 'Matsuzawa Kazukitest',
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
    img: 'project.jpg',
    title: '株式会社Mt.ファームわかとち',
    info: '株式会社Mt.ファームわかとち」様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。',
    url: 'https://wakatochi.jp',
  },
  {
    id: nanoid(),
    img: 'profile.jpg',
    title: '古民家民宿おっこの木',
    info: '「古民家民宿おっこの木」様のWEBサイトを制作しました。WordPressにて作成し、保守管理をしていました。',
    url: 'https://okkonoki.wakatochi.jp',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'このサイト',
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
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
