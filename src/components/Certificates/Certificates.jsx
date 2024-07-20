import React, { useState } from 'react';
import './Certificates.css';
import CertificatesData from './CertificatesData';
import CertificatesCard from './CertificatesCard';

export const Certificates = () => {
  const [certificates] = useState(CertificatesData);

  return (
    <div id="certificate" className='certificate'>
      <h2 className="section__title">Certificates</h2>
      <span className="section__subtitle">My achievement</span>
      <div className="certificate__container">
        <div className="certificate-cards">
          {certificates.map(certificate => (
            <CertificatesCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

