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
              <a href='tel:555-555-5555'>(469)248-5637</a>
            </div>
            <div className='d-flex'>
              <p>dez@djpringle.me</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                {/* FIXME: links */}
                <a href='' className='footer-nav'>
                  Home
                </a>
                <br />
                <a href='' className='footer-nav'>
                  About Me
                </a>
                <br />
                <a href='' className='footer-nav'>
                  Skills
                </a>
              </div>
              <div className='col'>
                <a href='' className='footer-nav'>
                  Experience
                </a>
                <br />
                <a href='' className='footer-nav'>
                  Portfolio
                </a>
                <br />
                <a href='' className='footer-nav'>
                  Contact Me
                </a>
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
