import React from 'react';

const Button = ({ onClick, showButton }) => {
  return (
    <div className="Button-container">
      <button type="button" className="Button" onClick={onClick}>
        {showButton && 'Load more'}
      </button>
    </div>
  );
};

export default Button;
