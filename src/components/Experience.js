import React from 'react'
import '../css/Experience.css'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2017 - 2021</h3>
            <p>Freelance Web Developer</p>
            <ul>
              <li>
                Participated in Dallas Givecamp to rebrand websites for small
                businesses
              </li>
              <li>
                Contributed to various open source projects and participated in
                website Hackathons
              </li>
              <li>
                Built 20+ single page websites and full stack applications
              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2015 - 2021</h3>
            <p>
              Linux Support Engineer
              II&emsp;&ensp;Rackspace&emsp;&ensp;Richardson, Tx
            </p>
            <ul>
              <li>
                SME for Zerto our Disaster Recovery solution. Responsible for
                application lifecycle management, patching, upgrades, and
                including lab and production failover events.
              </li>
              <li>
                Specialized in enterprise encryption and key management in order
                to achieve transparent encryption solutions to protect data at
                rest at the file and volume level.
              </li>
              <li>
                Followed industry and company standards for HIPAA/HITRUST, PCI
                DSS, and GDPR compliance in public/private cloud environments.
              </li>
              <li>
                Responsible for all aspects of provisioning process. Built,
                configured, and deployed secured windows and linux servers.
              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2008 - 2015</h3>
            <p>Systems Administrator&emsp;&ensp;PPAI&emsp;&ensp;Irving, Tx</p>
            <ul>
              <li>
                In charge of configuration management for workstations and
                mobile devices. Managed all software and hardware licensing.
                Implemented a virtualized testing environment.
              </li>
              <li>
                Maintained server/network infrastructure. Responsibilities
                included system installations and updates, audits, and server
                backups.
              </li>
              <li>
                Analyzed ways to identify and implement network improvements by
                creating monitors in order to minimize incidents. Scripted tasks
                such as machine deployments and upgrades through the use of
                imaging tools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
