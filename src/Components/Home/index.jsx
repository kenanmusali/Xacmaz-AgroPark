import React from 'react';
import './style.css';
import Header from './index1';
import Section from './index2';
import Info from './index3';
import Category from './index4';
import Form from './index5';

function HomeSection() {
  return (
    <div>
      <Header />
      <Section />
      <Info />
      <Category />
      <Form />
    </div>
  );
}

export default HomeSection;
