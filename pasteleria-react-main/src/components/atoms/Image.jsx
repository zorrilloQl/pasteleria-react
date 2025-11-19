import React from 'react';

const Image = ({ src, alt = '', className = '', rounded = false }) => (
  <img src={src} alt={alt} className={`img-fluid ${rounded ? 'rounded' : ''} ${className}`} />
);

export default Image;
