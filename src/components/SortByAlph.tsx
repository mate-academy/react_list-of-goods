import React from 'react';

type Props = {
  alph: () => void,
};

export const SortByAlph: React.FC<Props> = (props) => {
  const { alph } = props;

  return (
    <button
      type="button"
      className="button"
      onClick={alph}
    >
      Sort alphabetically
    </button>
  );
};
