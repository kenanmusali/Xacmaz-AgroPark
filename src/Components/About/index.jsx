import React from 'react'
import AboutHeader from '../Header/About';
import Brands from './Brands';
import Info from './Info';
import Section from './Section';

function AboutSection() {
  return (
    <div>
      <AboutHeader />
      <Section />
      <Info />
      <Brands />
    </div>
  )
}

export default AboutSection