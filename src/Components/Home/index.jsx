import React from 'react';
import HomeHeader from '../Header/Home';
import Section from './Section';
import Info from './Info';
import Category from './Category';
import Form from '../Form';

function HomeSection() {
  return (
    <div>
      <HomeHeader />
      <Section />
      <Info />
      <Category />
      <Form />
    </div>
  );
}

export default HomeSection;
