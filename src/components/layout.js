import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

import siteImg from "../images/cme-site-image-512.jpg"

const locale = 'en_US'
const siteUrl = 'https://www.caughtmyeye.cc'
const siteDesc = 'to see rather than look - photography writing web development - bali indonesia'

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
              { name: 'description', content: siteDesc },
              { name: 'keywords', content: 'caught my eye, photography, interior, photo essay, writing, webdev, web development, wordpress, gatsby, jekyll, php, javascript, html, css, freelance, freelancer, bali' },
              { name: 'msapplication-config', content: `${siteUrl}/browserconfig.xml` },
              { property: 'og:locale', content: locale },
              { property: 'og:site_name', content: data.site.siteMetadata.title },
              { property: 'og:url', content: `${siteUrl}/` },
              { property: 'og:type', content: 'website' },
              { property: 'og:title', content: 'c a u g ht my e y e' },
              { property: 'og:description', content: siteDesc },
              { property: 'og:image', content: `${siteUrl}${siteImg}` },
              { property: 'og:image:width', content: '512' },
              { property: 'og:image:height', content: '512' },
              { property: 'twitter:site', content: '@marklchaves' },
              { property: 'twitter:title', content: data.site.siteMetadata.title },
              { property: 'twitter:url', content: `${siteUrl}/` },
              { property: 'twitter:card', content: 'summary'},
            ]}
          >
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="black" />
            <link rel="canonical" href={siteUrl + '/'} />
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
