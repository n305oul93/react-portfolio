import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share'
import { Link } from 'react-scroll'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>Garland, Tx</p>
            </div>
            <div className='d-flex'>
              <a href='tel:469-248-5637'>(469)248-5637</a>
            </div>
            <div className='d-flex'>
              <a href='mailto:dez@djpringle.me'>dez@djpringle.me</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link smooth={true} to='home' className='footer-nav'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='about'
                  offset={-110}
                  className='footer-nav'
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='skills'
                  offset={-110}
                  className='footer-nav'
                >
                  Skills
                </Link>
              </div>
              <div className='col'>
                <Link
                  smooth={true}
                  to='experience'
                  offset={-110}
                  className='footer-nav'
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='portfolio'
                  offset={-110}
                  className='footer-nav'
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to='contact'
                  offset={-110}
                  className='footer-nav'
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
            <div className='d-flex justify-content-center'>
              <FacebookShareButton
                url={'https://facebook.com'}
                quote={'FullStack Developer'}
                hashtag='#javascript'
              >
                <FacebookIcon className='mx-3' size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={'https://twitter.com'}
                quote={'FullStack Developer'}
                hashtag='#javascript'
              >
                <TwitterIcon className='mx-3' size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={'https://reddit.com'}
                quote={'FullStack Developer'}
                hashtag='#javascript'
              >
                <RedditIcon className='mx-3' size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={'https://linkedin.com'}
                quote={'FullStack Developer'}
                hashtag='#javascript'
              >
                <LinkedinIcon className='mx-3' size={36} />
              </LinkedinShareButton>
            </div>
            <p className='pt-3 text-center'>
              Copyright&copy;{new Date().getFullYear()}&nbsp;SC3 | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
