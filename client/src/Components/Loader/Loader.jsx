import React from 'react';
import "./Loader.css";
import image from '../img/dogLoading.gif';

const Loader = () => {
  return (
    // <div className="Loader__container">
    //   <span className="loader"></span>
    // </div>
    <div className="loading">
      <img src={image} alt="" />
    </div>
  );
};

export default Loader;