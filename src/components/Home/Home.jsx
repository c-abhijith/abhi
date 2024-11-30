import React from 'react';
import "./Home.css";
import Data from './Data';

export default function Home() {
  

  return (
    <section className="home" id="home">
      <div className="home__container">
        {/* Single Resume button fixed at the top right */}
        <div className="home__resume">
        </div>
        <div className="home__content">
          <Data />
        </div>
      </div>
    </section>
  );
}
