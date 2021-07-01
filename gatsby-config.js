module.exports = {
  siteMetadata: {
    title: 'Matsuzawa Portfolio',
    author: {
      name: 'Matsuzawa',
    },
    description: 'マツザワのポートフォリオサイトです。',
    siteUrl: 'http://localhost:8000',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `iconsSvg`,
        path: `${__dirname}/src/iconsSvg/`,
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
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: `any maskable`,
        },
        icons: [
          {
            src: `src/images/favicon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `/`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.html': ['cache-control: public, max-age=0, must-revalidate'],
          '/page-data/**/app-data.json': ['cache-control: public, max-age=0, must-revalidate'],
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
