import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ children, ...props }) => (
  <button
    type="button"
    className="button"
    {...props}
  >
    {children}
  </button>
);
