// FIXME: uupdate picture links
import React from 'react'
import sportsFanCafe from '../assets/images/portfolio/sportsFanCafe/sportsFanCafe.png'
import mintBean from '../assets/images/portfolio/mintBean/mintBean.png'
import portfolio from '../assets/images/portfolio/portfolio.png'
import taskManager from '../assets/images/portfolio/task-manager.png'
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
        <b>Demo:</b> <a>Link to demo</a>
        <br />
        <b>Github:</b> {/* FIXME: links */}
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/sportsfan-cafe-react')
          }
        >
          https://github.com/n305oul93/sportsfan-cafe-react
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
        <b>Demo:</b> <a>Link to demo</a>
        <br />
        <b>Github:</b>{' '}
        <a
          href='/'
          className='hyper-link'
          onClick={() =>
            window.open(
              'https://github.com/n305oul93/https://github.com/our-mintbean-team'
            )
          }
        >
          https://github.com/n305oul93/https://github.com/our-mintbean-team
        </a>
      </>
    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'City Guide project'
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
          <div className='portfolio-image-box'>
            <img
              src={portfolio}
              alt='Portfolio React and Material UI Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box'>
            <img
              src={taskManager}
              alt='Task Manager React and Redux Project...'
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
