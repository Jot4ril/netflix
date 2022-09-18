import React from 'react';
import './home.scss';
import Navbar from '../navbar/Navbar';
import Featured from '../featured/Featured';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
    </div>
  );
}
