import React from 'react'
import Typed from 'react-typed'
import '../css/Header.css'

const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className='main-info'>
        <h1>full stack web developer</h1>
        <Typed
          className='typed-text'
          strings={[
            'React',
            'React Native',
            'Javascript',
            'Mongo DB',
            'Ruby on Rails'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* FIXME: link */}
        <a href='#' className='btn-main-offer'>
          contact me
        </a>
      </div>
    </div>
  )
}

export default Header
