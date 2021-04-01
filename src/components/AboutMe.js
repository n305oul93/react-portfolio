import React from 'react'
import dez from '../assets/images/Pringle_Desmond-SF.jpg'
import '../css/AboutMe.css'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={dez} alt='Desmond J. Pringle' />
          </div>
        </div>
        <div className='col-lg-6 col-xs-12'>
          <h1 className='about-heading'>about me</h1>
          {/* FIXME: update message */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            rem temporibus quo voluptas exercitationem quia nam dolorem
            consequuntur debitis minima, alias doloremque assumenda est corrupti
            fugiat, omnis numquam quas itaque maiores odit natus, repudiandae
            sed iusto? Fugiat ratione quidem illum cumque dolore dolores. Quis
            blanditiis deserunt fuga, praesentium adipisci modi sint expedita
            fugit voluptatem doloribus ad suscipit atque, vitae, nisi sequi.
            Soluta itaque architecto fuga repudiandae officiis quis omnis odit,
            doloribus assumenda, totam nisi nulla. Distinctio assumenda, magnam
            molestiae debitis ipsam quasi optio aliquam vitae, id vel, sunt
            velit totam? Necessitatibus consequatur ad dolores nemo tempora
            harum eaque quas eligendi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
