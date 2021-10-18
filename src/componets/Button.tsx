import React from 'react';

interface Props {
  name: string;
  clickHandler(): void;
}

export const Button: React.FC<Props> = ({ name, clickHandler }) => (
  <button
    type="button"
    onClick={() => {
      clickHandler();
    }}
  >
    {name}
  </button>
);
