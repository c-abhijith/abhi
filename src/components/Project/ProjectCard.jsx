import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa'; // GitHub icon from Font Awesome
import { AiOutlineEye } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
  const { title, keys, description, image } = project;

  const renderKeys = () => {
    return keys.map((key, index) => (
      <span key={index} className="project-key">{key}</span>
    ));
  };

  const handleLeftButtonClick = () => {
    window.location.href = 'https://github.com/your-repo'; // Replace with actual GitHub repo URL
  };

  const handleRightButtonClick = () => {
    window.location.href = 'https://your-project-url'; // Replace with actual project URL
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="card-keys">
          {renderKeys()}
        </div>
        <p className="card-description" id="dec">{description}</p>
        <div className="card-buttons">
          <button className="left-button" onClick={handleLeftButtonClick}>
            <FaGithub style={{ marginRight: '8px' }} /> GitHub
          </button>
          <button className="right-button" onClick={handleRightButtonClick}>
            <AiOutlineEye style={{ marginRight: '8px' }} /> View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
