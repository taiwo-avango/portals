import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const appName = 'gsi.portal.reference';
  const appVersion = '0.1.0';
  const isProduction = import.meta.env.PROD;

  return (
    <footer>
      {!isProduction && (
        <p className="footer-text">
          <b>{appName}-{appVersion}</b>
        </p>
      )}
    </footer>
  );
};

export default Footer;
