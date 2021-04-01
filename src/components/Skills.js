import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNodeJs,
  faAws,
  faDocker,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
import '../css/Skills.css'

// FIXME: update messaging
const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <h1 className='py-5'>my skills</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faNodeJs} size='2x' />
              </div>
              <h3>Javascript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, a.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faDocker} size='2x' />
              </div>
              <h3>Docker</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, accusantium?
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faAws} size='2x' />
              </div>
              <h3>AWS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                expedita.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faLinux} size='2x' />
              </div>
              <h3>Linux</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
