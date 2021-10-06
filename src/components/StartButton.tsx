import React from 'react';

type Props = {
  start: () => void,
};

export const StartButton: React.FC<Props> = (props) => {
  const { start } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={start}
    >
      Start
    </button>
  );
};
