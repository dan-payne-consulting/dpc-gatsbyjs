module.exports = {
  siteMetadata: {
    title: `Dan Payne Consulting, LLC`,
    description: `Dan Payne Consulting, LLC, is a web accessibility consultancy based in San Diego, California`,
    author: `@d_s_payne`,
    menuLinks:[
      {
        name:'Home',
        link:'/',
        display: 'header'
      },
      {
        name:'About',
        link:'/about',
        display: 'both'
      },
      {
        name:'Links',
        link:'/links',
        display: 'both'
      },
      {
        name:'Contact',
        link:'/contact',
        display: 'both'
      },
      {
        name:'Accessibility',
        link:'/accessibility',
        display: 'footer'
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
        icon: `src/images/DPC-icon-rb.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //{
    //  resolve: 'gatsby-plugin-web-font-loader',
    //  options: {
    //    typekit: {
    //      id: `sfo6sct`
    //    }
    //  }
    //},
      `gatsby-transformer-remark`,
      'gatsby-plugin-offline',
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/content`,
              name: "pages",
          },
      },

      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  `gatsby-remark-autolink-headers`,
                  {
                      resolve: 'gatsby-remark-copy-linked-files',
                      options: {
                          ignoreFileExtensions: [],
                      }
                  }
              ],
          },
      },
      {
          resolve: `gatsby-remark-images`,
          options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
          },
      },

  ],
}
