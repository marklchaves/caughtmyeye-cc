import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/bali-andong-rina-warung-1-900w.jpg'
import pic02 from '../images/bali-ubud-canang-900w.jpg'
import pic03 from '../images/california-santa-monica-jalan-pohon2-900w.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="photog"
          className={`${this.props.article === 'photog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Photography</h2>
          <span className="image main">
            <img data-opt-src={pic01} alt="Tara at the Warung by mark l chaves" />
          </span>
          <p>
            <a href="https://www.caughtmyeye.dev/photography/">gallery</a>
          </p>
          {close}
        </article>

        <article
          id="writing"
          className={`${this.props.article === 'writing' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Writing</h2>
          <span className="image main">
            <img data-opt-src={pic02} alt="Canang sari-Balinese offerings Ubud Bali" />
          </span>

          <p>
            <a href="https://www.caughtmyeye.dev/writing/">writing samples</a>
            &nbsp;&bull;&nbsp;
            <a href="https://guide.caughtmyeye.cc">style guide</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connect</h2>
          <form name="contact" method="post" action="https://formspree.io/xyypknql">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
