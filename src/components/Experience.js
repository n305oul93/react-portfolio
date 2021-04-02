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
            <h3>2017 - 2020</h3>
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
            <h3>2020 - 2021</h3>
            <p>
              Linux Support Engineer
              II&emsp;&ensp;Rackspace&emsp;&ensp;Richardson, Tx
            </p>
            <ul>
              <li>
                Install, configure, update and troubleshoot services at OS level
              </li>
              <li>
                Thorough problem-solving through to resolution, over the phone
                and ticketing system.
              </li>
              <li>
                Advised best practices or potential pitfalls and suggest
                alternatives that better serve the stability, security and
                performance of the customer’s solution
              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-left'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2017 - 2020</h3>
            <p>
              Zerto DR Engineer II&emsp;&ensp;Rackspace&emsp;&ensp;Richardson,
              Tx
            </p>
            <ul>
              <li>
                Primary resource for successful function of all DR replication
              </li>
              <li>
                Responsible for tickets directed to team in order to implement
                resolution as quickly as possible
              </li>
              <li>
                SME for clients and responsible for managing other engnineers on
                the team
              </li>
            </ul>
          </div>
        </div>
        <div className='timeline-block timeline-block-right'>
          <div className='marker'></div>
          <div className='timeline-content'>
            <h3>2016 - 2017</h3>
            <p>
              Encryption Specialist&emsp;&ensp;Rackspace&emsp;&ensp;Richardson,
              Tx
            </p>
            <ul>
              <li>
                Managed enterprise encryption and key management to protect
                databases in virtual cloud environments
              </li>
              <li>
                Responsible for installation, configuration, and upgrade of
                systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
