import React from 'react';

type Props = {
  callback: () => void;
  name: string;
};

export const Button: React.FC<Props> = (props) => {
  const { callback, name } = props;

  return (
    <button
      className="App__button"
      type="button"
      onClick={callback}
    >
      {name}
    </button>
  );
};
