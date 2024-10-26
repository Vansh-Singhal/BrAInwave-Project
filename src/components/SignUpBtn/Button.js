// src/components/Button.js
import React from 'react';

function Button({ children, onClick, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
