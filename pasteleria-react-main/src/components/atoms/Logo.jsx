import React from 'react';
import logoSrc from '../../assets/img/pastelera-mil-sabores-high-resolution-logo-transparent.png';

const Logo = ({ src = logoSrc, alt = 'Logo', className = '', width = 140 }) => (
  <img src={src} alt={alt} className={className} style={{ height: 'auto', width }} />
);

export default Logo;
