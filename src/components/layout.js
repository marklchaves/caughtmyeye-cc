import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

import siteImg from "../images/cme-logo-black-clear-512x512.png"

const locale = 'en_US'
const siteUrl = 'https://www.caughtmyeye.cc'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'to see rather than look - photography writing web development - bali indonesia' },
              { name: 'keywords', content: 'photography, interior, photo essay, writing, webdev, web development, wordpress, gatsby, jekyll, php, javascript, html, css, freelance, freelancer, bali' },
              { property: 'og:locale', content: locale },
              { property: 'og:site_name', content: data.site.siteMetadata.title },
              { property: 'og:url', content: siteUrl },
              { property: 'og:image', content: siteImg },
              { property: 'og:image:width', content: '512' },
              { property: 'og:image:height', content: '512' },
              { property: 'twitter:site', content: '@marklchaves' },
              { property: 'twitter:title', content: data.site.siteMetadata.title },
              { property: 'twitter:url', content: siteUrl },
              { property: 'twitter:card', content: 'summary'},
            ]}
          >
            <link rel="canonical" href={siteUrl} />
            <html lang={locale} />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
