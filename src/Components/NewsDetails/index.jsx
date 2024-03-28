import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

function NewsDetailSection() {
  const { id } = useParams();
  const [text, setText] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/News/${id}`)
    .then((res) => {
      return res.json();
    })
    .then(data=> setText(data))
  }, [id])


  return (
    <div>
      <h1>News Detail Section</h1>
      <p>Display the details of the news item with id: {id}</p>
      
      <p>{text.text}</p>
    </div>
  );
}

export default NewsDetailSection;
