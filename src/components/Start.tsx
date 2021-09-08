import React from 'react';

type Props = {
  method: () => void;
};

export const Start: React.FC<Props> = (props) => {
  const { method } = props;

  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={method}
    >
      Start
    </button>
  );
};
