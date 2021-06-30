module.exports = {
  siteMetadata: {
    title: 'Matsuzawa Portfolio',
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `/`,
        sitemap: `/sitemap.xml`,
      },
    },
  ],
};
