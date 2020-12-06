/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // Gatsby-Plugin-Offline requires "defer={false}" in order to work with react-helmet.
  siteMetadata: {
    title: `chxco`,
    siteUrl: `https://www.chxco.dev/`,
    keywords: `WIP`,
    // replace author with twitter account.
    author: `@achxco`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
