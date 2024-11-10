import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./About.css";

export default function About() {
  const { ref: picRef, inView: picInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle" id="section__subtitle">My introduction</span>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/abhi.png`}
            alt="Abhijith"
            className={`about-pic fade-in ${picInView ? 'show' : ''}`}
            ref={picRef}
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div
              className={`details-container fade-in ${textInView ? 'show' : ''}`}
              ref={textRef}
            >
              <i className="uil uil-award icons" aria-hidden="true"></i>
              <h3>Experience</h3>
              <p>3+ years <br />Backend Development</p>
            </div>
            <div
              className={`details-container fade-in ${textInView ? 'show' : ''}`}
              ref={textRef}
            >
              <i className="uil uil-chat icons" aria-hidden="true"></i>
              <h3>Education</h3>
              <p>3 years <br />BCA Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p
              id="p1"
              className={`fade-in ${textInView ? 'show' : ''}`}
              ref={textRef}
            >
             I’m Abhijith, a software developer with 4 years of experience in creating innovative solutions. My expertise in Docker, AWS, and microservices helps me build scalable and efficient applications. I am passionate about using cutting-edge technologies to solve complex problems and make a meaningful impact.
         
            </p>
            <p
              id="p2"
              className={`fade-in ${textInView ? 'show' : ''}`}
              ref={textRef}
            >
Throughout my career, I’ve contributed to and led the development of microservices such as Common, Activity, Calendar, and Notification, which handle various functions including file operations, customer management, appointment scheduling, and data collection. My notable achievements include implementing New Relic for performance monitoring, integrating gRPC for efficient communication, and adopting Pub/Sub architecture to enhance system performance. Thank you for visiting my site—I hope you enjoy exploring my projects!            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
