import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <h1>YOUR TRIP LIES AHEAD</h1>
      <p>Let Us Plan Your Next Trip</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Join Us 
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
