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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/cme-logo-black-clear-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
