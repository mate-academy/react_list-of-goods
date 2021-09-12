import React from 'react';

type Props = {
  length: () => void,
};

export const SortByLength: React.FC<Props> = (props) => {
  const { length } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={length}
    >
      Sort by length
    </button>
  );
};
