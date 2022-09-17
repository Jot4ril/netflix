import React from 'react';
import './home.scss';
import Navbar from '../navbar/Navbar';
import model from '../assets/model.jpg';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <img width="100%" height="auto" src={model} alt="" />
    </div>
  );
}
