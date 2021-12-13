import React, { MouseEventHandler } from 'react';

type Props = {
  reverse: MouseEventHandler<HTMLButtonElement>;
  sortAB: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
  sortByLength: MouseEventHandler<HTMLButtonElement>;
};

export const Buttons: React.FC<Props> = ({
  reverse,
  sortAB,
  reset,
  sortByLength,
}) => (
  <div className="buttons">
    <button
      type="button"
      className="button__reverse button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button__sortAB button"
      onClick={sortAB}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="button__reset button"
      onClick={reset}
    >
      Reset
    </button>
    <button
      type="button"
      className="button__sortByLen button"
      onClick={sortByLength}
    >
      Sort by length
    </button>
  </div>
);
