import React from 'react'
import TestimonialCarousel from './TestimonialsCarousel'
import '../css/Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h1>my happy clients</h1>
      <div className='container'>
        <div className='testimonials-content'>
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
