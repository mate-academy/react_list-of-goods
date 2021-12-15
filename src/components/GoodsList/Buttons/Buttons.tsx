import React from 'react';

type Props = {
  reverse: () => void;
  sortAlphabet: () => void;
  reset: () => void;
  sortByLength: () => void;
};

export const Buttons: React.FC<Props> = ({
  reverse,
  sortAlphabet,
  reset,
  sortByLength,
}) => (
  <div>
    <button
      type="button"
      className="btn btn-primary"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="btn btn-success"
      onClick={sortAlphabet}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="btn btn-danger"
      onClick={reset}
    >
      Reset
    </button>
    <button
      type="button"
      className="btn btn-warning"
      onClick={sortByLength}
    >
      Sort by length
    </button>
  </div>
);
