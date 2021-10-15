import React from 'react';

type Props = {
  name: string;
  action: () => void;
};

export const Button: React.FC<Props> = (props) => {
  const { name, action } = props;

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={action}
    >
      {name}
    </button>
  );
};
