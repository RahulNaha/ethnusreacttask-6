import React, { useState } from 'react';

export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: 'red',
    backgroundColor: 'black',
    borderColor: 'red',
    border: '3px solid',
  });

  const toggle = () => {
    if (mystyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',
        border: '3px solid',
      });
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'white',
        border: '3px solid',
      });
    }
  }

  return (
    <div>
      

      <div className="about-content" style={mystyle}>
        <h1>👋 Hi, I'm Rahul Naha.</h1>

        <p>I'm a passionate technologist with a strong foundation in JavaScript, C++, Java, and Data Structures & Algorithms (DSA). My journey in technology began with a Bachelor of Engineering in Computer Engineering from Vellore Institute of Technology, Vellore. I hail from Siliguri, West Bengal.I love gardening and problem solving </p>

       

      
        <h2>🎓 Education:</h2>
        <p>I am currently pursing a Bacherlor of Technology  with a focus on Computer Engineering from Vellore Institute of Technology, Vellore. My academic journey laid the foundation for my technical expertise and ignited my passion for innovation.I did my Schooling from Delhi Public School ,Siliguri</p>
      </div>
      <div className='container'>
        <button type='button' className='btn btn-primary' onClick={toggle}>Toggle dark mode</button>
      </div>
    </div>
  );
}
