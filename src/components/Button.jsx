import React from 'react';

function Button({ children, className, onItemClick }) {
  return (
    <button onClick={onItemClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
