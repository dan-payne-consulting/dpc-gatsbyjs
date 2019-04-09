module.exports = {
  siteMetadata: {
    title: `Dan Payne Consulting, LLC`,
    description: `Dan Payne Consulting, LLC, is a web accessibility consultancy based in San Diego, California`,
    author: `@d_s_payne`,
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About',
        link:'/about'
      },
      {
        name:'Links',
        link:'/links'
      },
      {
        name:'Contact',
        link:'/contact'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/DPC-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: `sfo6sct`
        }
      }
    },
  ],
}
