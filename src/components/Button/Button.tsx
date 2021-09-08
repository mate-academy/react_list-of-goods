import React from 'react';

interface Props {
  name: string;
  onClick: (option?: string) => void;
}

export const Button: React.FC<Props> = (props) => {
  const { name, onClick } = props;

  return (
    <button
      className="button"
      type="button"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
};
