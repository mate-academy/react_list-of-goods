import React from 'react';

type Props = {
  reverse: () => void,
};

export const ReverseButton: React.FC<Props> = (props) => {
  const { reverse } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={reverse}
    >
      Reverse
    </button>
  );
};
