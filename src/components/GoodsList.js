import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export const GoodsList = (props) => {
  const { goods,
    handleReverse,
    handleSortAZ,
    handleSortByLength,
    handleReset,
    handleSelect,
    value } = props;

  return (
    <div className="goods">
      <button
        type="button"
        onClick={handleReverse}
        className="goods__btn"
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={handleSortAZ}
        className="goods__btn"
      >
        Sort Alphabetically
      </button>
      <button
        type="button"
        onClick={handleSortByLength}
        className="goods__btn"
      >
        Sort By Length
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="goods__btn"
      >
        Reset
      </button>

      <select
        onChange={handleSelect}
        value={value}
        className="goods__select"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <ul className="goods__list">
        {goods.map(good => (
          <li key={good} className="goods__item">{good}</li>
        ))}
      </ul>
    </div>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSortAZ: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
