import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

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
          <p>
            I've contributed to Shotzr, Loop Images UK, EyeEm, Unsplash, and Getty Images.
          </p>
          <p>
            I'm an Airbnb Plus photographer and the creator of BaliStreetPhotographer.com.
          </p>
          <p>
            My photography has been exhibited in Bali, the US, and the EU.
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
          <p>
            I've been published in print on AirAsia Travel 3Sixty Magazine and Asian Geographic Magazine. I've been featured online at Vimpt, Editorr, and Grryo.
          </p>
          <p>
            I self-publish articles on DEV.to and Medium.
          </p>
          {close}
        </article>

        <article
          id="webdev"
          className={`${this.props.article === 'webdev' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Web Development</h2>
          <p>
            Sample sites: EvePersak.com, Natocho.com, ScalingStudentSuccess.org, and Accuvalent.com.
          </p>
          <p>
            Web apps: Inibali.caughtmyeye.cc, Hope.caughtmyeye.cc, and Shorties.caughtmyeye.cc.
          </p>
          <p>
            WordPress plugins: Gallery Image Captions, Hide and Seek Header, and Ko-fi button.
          </p>
          <p>
            Before freelancing, I slung code and managed web teams for companies such as IBM, Oracle, and Sony PlayStation. I have an undergraduate degree in software engineering from The Ohio State University. I have a masters in computer science from The American University in Washington, D.C. My credentials are on <a href="https://www.quora.com/profile/Mark-Chaves/">Quora</a>.
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
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/marklchaves/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marklchaves/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
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
