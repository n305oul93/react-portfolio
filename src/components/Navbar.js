import React from 'react'
import logo from '../assets/images/light-bulb-639x581.jpg'
import { Link } from 'react-scroll'
import '../css/Navbar.css'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
      <div className='container'>
        {/* FIXME: link */}
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='logo...' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        {/* FIXME: nav links */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link smooth={true} to='home' className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='about'
                offset={-110}
                className='nav-link'
                href='#'
              >
                about me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='skills'
                offset={-110}
                className='nav-link'
                href='#'
              >
                skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='experience'
                offset={-110}
                className='nav-link'
                href='#'
              >
                experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='portfolio'
                offset={-110}
                className='nav-link'
                href='#'
              >
                portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                smooth={true}
                to='contact'
                offset={-110}
                className='nav-link'
                href='#'
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
