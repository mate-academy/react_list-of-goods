import React, { MouseEventHandler } from 'react';

type Props = {
  reverse: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
  sortAlphabetically: MouseEventHandler<HTMLButtonElement>;
  sortByLength: MouseEventHandler<HTMLButtonElement>;
};

export const ControlButtons: React.FC<Props> = ({
  reverse,
  reset,
  sortAlphabetically,
  sortByLength,
}) => (
  <>
    <div className="btn-wrap">
      <button
        type="button"
        className="btn-reverse btn"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="btn-sortAlpha btn"
        onClick={sortAlphabetically}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        className="btn-reset btn"
        onClick={reset}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn-sortByLen btn"
        onClick={sortByLength}
      >
        Sort by length
      </button>
    </div>
  </>
);
