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
              As a Jr. Software Developer at Syoft, I have over 2 years of experience in developing robust REST APIs using Python and Django, and leveraging message queuing systems and gRPC for efficient communication with backend microservices. I also have proficiency in relational databases such as Postgres and Sqlite3, and tools like JIRA, New Relic, and Twilio.
            </p>
            <p
              id="p2"
              className={`fade-in ${textInView ? 'show' : ''}`}
              ref={textRef}
            >
              In my role, I have successfully worked on and contributed to various microservices, such as Common, Activity, Calendar, and Notification, that handle file operations, customer relationship management, appointment scheduling, and data collection and saving, respectively. Some of my notable achievements include leading the strategic implementation of New Relic for performance monitoring, integrating gRPC for communication efficiency, and implementing Pub/Sub communication architecture for system optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
