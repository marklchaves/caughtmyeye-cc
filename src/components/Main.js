import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/bali-andong-rina-warung-1-900w.jpg'
import pic02 from '../images/bali-ubud-canang-900w.jpg'
import pic03 from '../images/mark-dad-encinitas-beach-900w.jpeg'

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
          id="threads"
          className={`${this.props.article === 'threads' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Threads</h2>
          <span className="image main">
            <img src={pic03} alt="First Ocean" />
          </span>
          <p>
            these days, i surf maybe a couple of times a year.
          </p>
          <p>
            this year (2025), i was on a "mission" to surf as much as possible before the upcoming rainy season. it's a long story, but last year's season went way into july-august. 10 months. uncanny.
          </p>
          <p>          
            during my last session of this year, i saw someone on the beach wading in the shallows. they had a small inflatable raft. you don't see that every day here in bali.
          </p>
          <p>
            seeing that "toy" raft the other day brought back my first memory of the ocean. not sure exactly how old we (me and my brothers) were, but we were on a family vacation to myrtle beach, south carolina. i was still in primary school, so it was in the 70s.
          </p>
          <p>
            i remember smelling the salt in the air for the very first time. we were still in the car, driving to our hotel. my dad rolled down his window and said, "can you smell the ocean?"
          </p>
          <p>
            on that trip, my dad got 2 inflatable "toys" for us. one was an inner tube. the other, you guessed it, was a small raft.
          </p>
          <p>
            <a href="https://www.caughtmyeye.dev/">more threads</a>
          </p>
          {close}
        </article>

        <article
          id="photog"
          className={`${this.props.article === 'photog' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Photography</h2>
          <span className="image main">
            <img src={pic01} alt="Tara at the Warung" />
          </span>
          <p>
            <a href="https://unsplash.com/@marklchaves">Unsplash</a>
            &nbsp;&bull;&nbsp;
            <a href="https://www.pexels.com/@mark-chaves-410307/">Pexels</a>
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
            <img src={pic02} alt="Canang sari-Balinese offerings Ubud Bali" />
          </span>

          <p>
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
