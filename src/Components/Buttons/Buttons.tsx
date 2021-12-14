import React from 'react';

type Props = {
  sortByAlphabet: () => void;
  sortByLength: () => void;
  reverse: () => void;
  reset: () => void;
};

export const Buttons: React.FC<Props> = ({
  sortByAlphabet,
  sortByLength,
  reverse,
  reset,
}) => (
  <div className="buttons">
    <button
      type="button"
      className="button button__sortByAlphabet"
      onClick={sortByAlphabet}
    >
      Sort by alpabet
    </button>
    <button
      type="button"
      className=" button button__sortByLength"
      onClick={sortByLength}
    >
      Sort by length
    </button>
    <button
      type="button"
      className="button button__reverse"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button button__reset"
      onClick={reset}
    >
      Reset
    </button>
  </div>
);
