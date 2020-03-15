const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'c a u g ht my e y e',
    author: 'mark l  chaves',
    description: 'photography writing web development',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'caught my eye',
        short_name: 'cme',
        start_url: '/',
        background_color: '#212326',
        theme_color: '#25272A',
        display: 'standalone',
        icon: 'src/images/cme-logo-white-clear-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-offline`,
  ],
}
