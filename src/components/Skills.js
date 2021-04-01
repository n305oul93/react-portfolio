import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNodeJs,
  faAws,
  faDocker,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import '../css/Skills.css'

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
                A high-level, just-in-time compiled & multi-paradigm language.
                Alongside HTML and CSS, it is one of the core technologies of
                the World Wide Web.
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
                A set of platform as a service (PaaS) products that use OS-level
                virtualization to deliver software in packages called
                containers.
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
                An on-demand cloud computing platform offering services such as
                computing, database & application services.
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
                A family of open-source Unix-like operating systems based on the
                Linux kernel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
