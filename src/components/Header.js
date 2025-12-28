import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-eye"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>c a u g ht my e&nbsp;y&nbsp;e</h1>
        <p>
          to see rather than look
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('photog')
            }}
          >
            Photography
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('writing')
            }}
          >
            Writing
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Connect
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
