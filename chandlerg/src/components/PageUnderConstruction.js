import React from 'react';
import './PageUnderConstruction.css';
import PageUnderConstructionJpg from '../assets/jpgs/page-under-construction.jpg';

function PageUnderConstruction() {
  return (
      <img className="Page-under-construction" src={PageUnderConstructionJpg} alt="This page is under construction" />
  );
}

export default PageUnderConstruction;