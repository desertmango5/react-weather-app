import React from 'react';
import '../styles/NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h3 className="not-found__crap">Craptastic!</h3>
    <p className="not-found__text">Page Not Found</p>
    <p className="not-found__code">404</p>
    <a href="/" className="not-found__return-home">Return to Safety →</a>
  </div>
);

export default NotFound;
