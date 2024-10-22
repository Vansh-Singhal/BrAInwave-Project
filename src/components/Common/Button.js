// src/components/Common/Button.js
import React from 'react';

const Button = ({ label, onClick, styleType = 'primary', href = '#', className = '', ...props }) => {
  const baseStyle = 'px-6 py-3 rounded-md font-semibold transition-all';

  const styleTypes = {
    primary: `bg-primary text-white hover:bg-primary-dark`,
    secondary: `border border-white text-white hover:bg-white hover:text-primary`,
    outline: `border border-primary text-primary hover:bg-primary hover:text-white`,
  };

  const buttonStyle = `${baseStyle} ${styleTypes[styleType]} ${className}`;

  return (
    <a href={href} onClick={onClick} className={buttonStyle} {...props}>
      {label}
    </a>
  );
};

export default Button;
