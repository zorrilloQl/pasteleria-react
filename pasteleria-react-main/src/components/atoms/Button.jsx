import React from 'react';

const VARIANT_MAP = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  dark: 'btn-dark',
  light: 'btn-light',
  link: 'btn-link'
};

const Button = ({ variant = 'primary', size = 'md', onClick, children, className = '', type = 'button' }) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = VARIANT_MAP[variant] || VARIANT_MAP.primary;
  return (
    <button type={type} className={`btn ${variantClass} ${sizeClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
