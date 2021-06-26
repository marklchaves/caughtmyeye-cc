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
        icon: 'static/favicon-32x32.png', // This path is relative to the root of the site.
        icons: [
          {
            src: `/icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          }, 
          {
            src: `/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          }, 
          {
            src: `/icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/icons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },                              
        ], // Add or remove icon sizes as desired
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-offline`,
  ],
}
