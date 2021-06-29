module.exports = {
  siteMetadata: {
    title: 'Matsuzawa Portfolio',
    menuLinks: [
      {
        name: 'hero',
        link: '/#hero',
      },
      {
        name: 'About',
        link: '/#about',
      },
      {
        name: 'Projects',
        link: '/#projects',
      },
      {
        name: 'Skills',
        link: '/#skills',
      },
      {
        name: 'Contact',
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
        name: `Gatsby Simplefolio`,
        short_name: `Simplefolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
