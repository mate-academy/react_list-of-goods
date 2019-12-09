import React from 'react';
import PropTypes from 'prop-types';

const ButtonsList = (props) => {
  const {
    toReverse,
    toSortAlphabetically,
    toReset,
    toSortByLength,
    toSelectByLength,
    selectedLength,
  } = props;

  const goodsLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="goods__buttons">
      <button
        onClick={toReverse}
        type="button"
        className="goods__button"
      >
        Reverse
      </button>
      <button
        onClick={toSortAlphabetically}
        type="button"
        className="goods__button"
      >
        Sort alphabetically
      </button>
      <button
        onClick={toReset}
        type="button"
        className="goods__button"
      >
        Reset
      </button>
      <button
        onClick={toSortByLength}
        type="button"
        className="goods__button"
      >
        Sort by length
      </button>
      <select
        onChange={toSelectByLength}
        value={selectedLength}
        className="goods__button"
      >
        {goodsLengths.map(goodLength => (
          <option key={goodLength} value={goodLength}>
            length &ge;
            {goodLength}
          </option>
        ))}
      </select>
    </div>
  );
};

ButtonsList.propTypes = {
  toReverse: PropTypes.func.isRequired,
  toSortAlphabetically: PropTypes.func.isRequired,
  toReset: PropTypes.func.isRequired,
  toSortByLength: PropTypes.func.isRequired,
  toSelectByLength: PropTypes.func.isRequired,
  selectedLength: PropTypes.number.isRequired,
};

export default ButtonsList;
