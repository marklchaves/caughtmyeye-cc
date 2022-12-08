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
            Contributor for Shotzr, Loop Images UK, EyeEm, Unsplash, and Getty Images.
          </p>
          <p>
            Airbnb Plus photographer and the creator of <a href="https://balistreetphotographer.com/">BaliStreetPhotographer.com</a>.
          </p>
          <p>
            Photography exhibited in Bali, the US, and the EU.
          </p>
          <p>
            <a href="https://www.caughtmyeye.dev/photography/">photography portfolio</a>
          </p>
          <p>
            <a className="mlc-icon-link" href="https://vsco.co/marklchaves/journal/p/1"><img width="24" height="24" src="https://assets.vsco.co/assets/images/assets/Logo_white_24.png" alt="VSCO Logo" /></a>
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
            Published on print in AirAsia Travel 3Sixty Magazine and Asian Geographic Magazine. Online articles and essays published on Inkifi, Vimpt, Editorr, and Grryo.
          </p>
          <p>
            Recent contributions: Uncanny Owl and Uncanny Automator blog posts and KB articles, MonsterInsights how-to docs, Popup Maker how-tos and articles.
          </p>
          <p>
            Self-published articles on <a href="https://dev.to/marklchaves/">DEV.to</a> and <a href="https://medium.com/@marklchaves/">Medium</a>.
          </p>
          <p>
            <a href="https://www.caughtmyeye.dev/writing/">writing portfolio</a>
            &nbsp;&bull;&nbsp;
            <a href="https://guide.caughtmyeye.cc">style guide</a>
          </p>
          <p>
          <a className="mlc-icon-link" href="https://dev.to/marklchaves/"><img alt="DEV.to logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABjElEQVRoge2ZUbWEIBCGN4IRjGAEIxjBCBthGxDBCEYwghGIQIT/PsCcOxfBdVm8w8N85/ggDDDfioLu46EoitIsAEYAOwAHGVYA0zfJSyUe87kEvH0ruBIBK501p0SgKVRAGhWQRgWkqSFgAczR8cJxvdhCeRxLCyOdm8QYhvVbXWA/iV1CjAPQZ2IoqSGcd1H/DkAX6uZbBQAMlEiUjI1iRnaQ5JPFWNb/xsoP25jaAmumjAtsiT4AYGUxCyt/ZcRuFQB+L7u5KMDb8KkyhbIh1eBOgT4jYODfJWyirznE0NTj8//ZhACLTf2iC6u3+Dutktv41gQcqzd4M/9FBOBv0D0cKajdBGA8kRUT2HLJBOYQ17E2hwXsboGSxyixJMbMvsbWFujhFyd6cnTwT5IrCxnhovGoj/sFEgNTcle2EpzpTX1VAYf0Zi6+SXf4Z3luMxdjwnH6CaeGgCgqII0KSKMC0pQItPJpHUCZQG4XKUH2g8KZwCidNeOrf2mkroQLY89FySuKovwLP5T6AlwGP7kUAAAAAElFTkSuQmCC"/></a>
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
          <span className="image main">
            <img data-opt-src={pic03} alt="Santa Monica CA" />
          </span>

          <p>
            Sample sites: EvePersak.com, Natocho.com, ScalingStudentSuccess.org, and Accuvalent.com.
          </p>
          <p>
            Web apps: Inibali.caughtmyeye.cc, Hope.caughtmyeye.cc, and Shorties.caughtmyeye.cc.
          </p>
          <p>
            Published WordPress plugins: Gallery Image Captions, Hide and Seek Header, Search Placeholder Avada, Will Work for Ko-fi (CGB), and Ko-fi button (contributor).
          </p>
          <p>
            Before freelancing, I slung code and managed dev teams for companies such as IBM, Oracle, and Sony PlayStation. I have a Bachelor of Software Engineering degree from The Ohio State University. I have a Master of Computer Science degree from The American University Washington, DC. More credentials are on <a href="https://www.quora.com/profile/Mark-Chaves/">Quora</a>.
          </p>
          <p>
            <a href="https://www.caughtmyeye.dev/webdev/">webdev portfolio</a>
          </p>

          <ul className="icons">
            <li>
              <a
                href="https://codepen.io/marklchaves/"
                className="icon fa-codepen"
              >
                <span className="label">CodePen</span>
              </a>
            </li>
            <li>
              <a
                href="https://profiles.wordpress.org/mlchaves/"
                className="icon fa-wordpress"
              >
                <span className="label">WordPress</span>
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
          <ul className="icons">
            <li>
              <a
                href="https://www.pinterest.com/marklchaves/"
                className="icon fa-pinterest"
              >
                <span className="label">Pinterest</span>
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
