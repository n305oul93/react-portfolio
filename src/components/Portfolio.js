// FIXME: uupdate picture links
import React from 'react'
import sportsFanCafe from '../assets/images/portfolio/sportsFanCafe/sportsFanCafe.png'
import mintBean from '../assets/images/portfolio/mintBean/mintBean.png'
import indyFi from '../assets/images/portfolio/indyFi/indyFi.png'
import bookStoreRails from '../assets/images/portfolio/bookStoreRails/bookStoreRails.png'
import '../css/Portfolio.css'
// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

// FIXME: update portfolio projects
const Portfolio = () => {
  // Spotsfan Cafe
  const openPopupboxSportsFanCafe = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={sportsFanCafe}
          alt='Sportsfan Cafe Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/sportsfan-cafe-react')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/sportsfan-cafe-react')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Sportsfan Cafè project'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // Mintbean Hackathon Project
  const openPopupboxMintBean = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={mintBean}
          alt='Mintbean Hackathon Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://our-mintbean-team.github.io/texteditor-mintbean/'
            )
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() => window.open('https://github.com/our-mintbean-team')}
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Text Editor | Mintbean Hackathon project'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // IndyFi Project
  const openPopupboxIndyFi = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={indyFi}
          alt='IndyFi Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/indyfi-react')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/indyfi-react')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'IndyFi Independent Film Showcase project'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  // Book Store Ruby on Rails Project
  const openPopupboxBookStoreRails = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={bookStoreRails}
          alt='Book Store Ruby on Rails Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/bookstore_rails')
          }
        >
          Link to demo
        </a>
        <br />
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/bookstore_rails')
          }
        >
          Github Code
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Book Store Ruby on Rails project'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div
            className='portfolio-image-box'
            onClick={openPopupboxSportsFanCafe}
          >
            <img
              src={sportsFanCafe}
              alt='Sportsfan Cafe Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxMintBean}>
            <img
              src={mintBean}
              alt='Mintbean Hackathon Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxIndyFi}>
            <img
              src={indyFi}
              alt='IndyFi Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className='portfolio-image-box'
            onClick={openPopupboxBookStoreRails}
          >
            <img
              src={bookStoreRails}
              alt='Book Store Ruby on Rails Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio
