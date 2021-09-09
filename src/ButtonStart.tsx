import React from 'react';

type Props = {
  start: () => void;
};

export const ButtonStart: React.FC<Props> = (props) => {
  const { start } = props;

  return (
    <button
      type="button"
      onClick={start}
      className="btn btn-success"
    >
      Start
    </button>
  );
};
