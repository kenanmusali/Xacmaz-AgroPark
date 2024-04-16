import React from 'react';
import './style.css'
import HeaderNews from './index1';
import NewsDetailCategory from './index2';

function NewsDetailSection() {

  return (
    <div>
      <HeaderNews />
      <NewsDetailCategory/>
    </div>
  );
}

export default NewsDetailSection;
