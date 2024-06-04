import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'
import Testimonials from './Testimonials/Testimonials'
import Advantages from './Advantages/Advantages'
import Questions from './Questions/Questions'
import Frame from './Frame/Frame'
import Footer from './Footer/Footer'


const Overall = () => {
  return (
    <div className='overall'>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Questions/>
      <Frame/>
      <Footer/>
    </div>
  )
}

export default Overall
