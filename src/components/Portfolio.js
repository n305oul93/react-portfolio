import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
// Fontawesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// React Popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={netflix}
          alt='Netflix Clone Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <b>Github:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/react-portfolio')
          }
        >
          https://github.com/n305oul93/react-portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflx = {
    titleBar: {
      enable: true,
      text: 'Netflix clone project'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={cityGuide}
          alt='City Guide Project...'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          inventore.
        </p>
        <b>Demo:</b> <a>Link to demo</a>
        <br />
        <b>Github:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/n305oul93/react-portfolio')
          }
        >
          https://github.com/n305oul93/react-portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: 'City Guide App project'
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
            <img
              src={netflix}
              alt='Netflix Clone Project...'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className='portfolio-image-box' onClick={openPopupboxCityGuide}>
            <img
              src={cityGuide}
              alt='City Guide Project...'
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
      <PopupboxContainer {...popupboxConfigNetflx} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
    </div>
  );
};

export default Portfolio;
