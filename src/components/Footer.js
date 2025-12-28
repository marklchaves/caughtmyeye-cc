import React from 'react'
import PropTypes from 'prop-types'

let currYear = new Date().getFullYear(); 

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {currYear} <a href="https://www.caughtmyeye.dev/">caught my eye dev</a>. Built with <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. Based on Dimension by <a href="https://html5up.net/">HTML5 UP</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
