import React from 'react';
import './AnimatedArrow.css'

const AnimatedArrow = ({ degree }) => {
  let arrowDegree = {
    '-webkit-transform': 'rotate('+degree + 'deg)',
    'transform': 'rotate('+degree + 'deg)'
  };
  return (
    <section className="ArrowSection">
      <div className="arrow" style={arrowDegree}></div>
    </section>
  )
};

export default AnimatedArrow;
