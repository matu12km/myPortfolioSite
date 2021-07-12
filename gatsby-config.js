module.exports = {
  siteMetadata: {
    title: 'Matsuzawa Portfolio',
    author: {
      name: 'Matsuzawa',
    },
    description: 'マツザワのポートフォリオサイトです。',
    siteUrl: 'https://matsuzawa.dev/',
    social: {
      twitter: 'matu_engineer',
      instagram: 'k_matu12',
    },
    menuLinks: [
      {
        id: 'about',
        name: '自己紹介',
        link: '/#about',
      },
      {
        id: 'projects',
        name: '制作物',
        link: '/#projects',
      },
      {
        id: 'skills',
        name: 'スキル',
        link: '/#skills',
      },
      {
        id: 'contact',
        name: 'お問い合わせ',
        link: '/#contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-perf-budgets',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matsuzawa Portfolio`,
        short_name: `Matsufolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `minimal-ui`,
        icon: 'src/media/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `src/media/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/media/favicon.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://matsuzawa.dev/`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/app-data.json': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/*': ['cache-control: public, max-age=0, must-revalidate'],
          '/static/*': ['cache-control: public, max-age=31536000, immutable'],
          '/icons/*': ['cache-control: public, max-age=31536000, immutable'],
          '/media/*': ['cache-control: public, max-age=31536000, immutable'],
          '/sw.js': ['cache-control: public, max-age=0, must-revalidate'],
          '/**/*.js': ['cache-control: public, max-age=31536000, immutable'],
          '/**/*.css': ['cache-control: public, max-age=31536000, immutable'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`],
      },
    },
  ],
};
