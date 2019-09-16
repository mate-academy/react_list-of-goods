import React from 'react';

const Button = (props) => {
  const { onClick, className, children } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
