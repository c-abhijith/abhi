import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './ProjectData';
import "./Project.css"


export const Project = () => {
    const [projects, setProjects] = useState(projectsData);

  const filterProjects = (category) => {
    if (category === 'All') {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter(project => project.category === category));
    }
  };
  return (
    <div id="project" className='project'>
         <h2 className="section__title">Projects</h2>
         <span className="section__subtitle">My personal projects</span>
         <div className="project__container">
            <div className="project__buttons">
                <button className="first_button" onClick={() => filterProjects('All')}>All</button>
                <button onClick={() => filterProjects('Python')}>Python</button>
                <button onClick={() => filterProjects('Java')}>Java</button>
                <button className='last_button' onClick={() => filterProjects('ML')}>ML</button>
            </div>
           
            <div className="project-cards">
                {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}
