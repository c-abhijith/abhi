import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Modal from './Modal';
// import './CertificatesCard.css'; // Ensure you have your card styles here

const CertificatesCard = ({ certificate }) => {
  const { title, image } = certificate;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-buttons">
          <button className="left-button" onClick={handleViewClick}>
            <AiOutlineEye style={{ marginRight: '8px' }} /> View
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={image} />
    </div>
  );
};

export default CertificatesCard;
