import React, { useState, useEffect } from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder = '', className = '', name }) => {
  const [internal, setInternal] = useState(value || '');
  useEffect(() => { setInternal(value || ''); }, [value]);
  const handle = (e) => {
    setInternal(e.target.value);
    if (onChange) onChange(e);
  };
  return (
    <div className={`mb-3 ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <input name={name} type={type} className="form-control" placeholder={placeholder} value={value !== undefined ? value : internal} onChange={handle} />
    </div>
  );
};

export default Input;
