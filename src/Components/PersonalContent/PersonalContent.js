import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import Me from './Me/Me';
import './PersonalContent.css'

const PersonalContent = ({page}) => {
  let render;
  if (page === 'Me'){
    render = <Me></Me>
  }

  return (
    <section className="PersonalContentSection">
      {render}
    </section>
  );
};

export default PersonalContent;
