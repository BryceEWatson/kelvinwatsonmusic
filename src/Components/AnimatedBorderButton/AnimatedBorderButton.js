import React from 'react';
import './AnimatedBorderButton.css'

const AnimatedBorderButton = ({text, height, onClick}) => {

  return (
    <div className="AnimatedBorderButton__Container">
      <button onClick={onClick} className="AnimatedBorderButton__Button AnimatedBorderButton__Button--DrawBorder">{text}</button>
    </div>
  )
};

export default AnimatedBorderButton;
