import React from 'react'
import "./Home.css"


export default function Home() {
  return (
 
    <section className='home' id='home'>
      <div className="home__img"></div>
      <div className="section__text">
        <p className="home_section__text__p1">Hello, I'm</p>
        <h1 className="home_title">Abhijith C</h1>
        <p className="section__text__p2">Back-end Developer</p>
        <div className="btn-container">
          <a href="#contact" className='button button--flex'>  Download CV <i class="uil uil-import"></i> </a>
        </div>
        <div className="socials-container">
        <a href="https://www.linkedin.com/in/cabhijithofficial/" className="home__social-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
    </a>
        <a href="https://github.com/c-abhijith" className="home__social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
        </a>
    
    <a href="https://www.hackerrank.com/profile/cabhijithoffici1" className="home__social-link" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png" alt="HackerRank" />
    </a>
    <a href="https://leetcode.com/u/cabhijithofficial/" className="home__social-link" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
    </a>
    
</div>


      </div>
       
    </section>
  )
}
