import React from 'react';
import '../index.css';
// Button-Komponente definieren
function Button({ onClick, children, className }) {
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
