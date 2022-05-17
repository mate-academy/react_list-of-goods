import React from 'react';

type Props = {
  reverse: () => void,
  sortAlphabetically: () => void,
  reset: () => void,
  sortByLength: () => void,
  filterByLength: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  lettersLimit: number
};

export const SortPropsPanel: React.FC<Props> = (props) => {
  const {
    reverse,
    sortAlphabetically,
    reset,
    sortByLength,
    filterByLength,
    lettersLimit,
  } = props;

  const lettersLimitValues = Array(10).fill(null).map((_, idx) => 1 + idx);

  return (
    <div className="app__sort-btn-container">
      <button
        className="app__btn"
        type="button"
        onClick={reverse}
      >
        reverse
      </button>

      <button
        className="app__btn"
        type="button"
        onClick={sortAlphabetically}
      >
        Sort alphabetically
      </button>

      <button
        className="app__btn"
        type="button"
        onClick={reset}
      >
        reset
      </button>

      <button
        className="app__btn"
        type="button"
        onClick={sortByLength}
      >
        sort by length
      </button>

      <select
        name="length"
        className="app__lettersCountFilter"
        value={lettersLimit}
        onChange={filterByLength}
      >
        {lettersLimitValues
          .map((_, index) => (
            <option
              value={lettersLimitValues[index]}
              key={lettersLimitValues[index]}
              selected={lettersLimitValues[index] === lettersLimit}
            >
              {`${lettersLimitValues[index]}+ letters`}
            </option>
          ))}
      </select>
    </div>
  );
};
