import React from 'react';
import PropTypes from 'prop-types';
import { Goods } from './Goods';

export const GoodsList = (props) => {
  const {
    goods,
    handleClickReverse,
    handleClickSortByAlphabet,
    handleClickSortByLength,
    handleClickReset,
    handleChangeSelect,
    selectedValue,
  } = props;

  return (
    <>
      <div className="buttons">
        <button
          type="button"
          className="button is-success"
          onClick={handleClickSortByAlphabet}
        >
          Sort by A-Z
        </button>
        <button
          type="button"
          className="button is-success"
          onClick={handleClickSortByLength}
        >
          Sort by Length
        </button>
        <button
          type="button"
          className="button is-success"
          onClick={handleClickReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button is-danger"
          onClick={handleClickReset}
        >
          Reset
        </button>

        <select
          onChange={handleChangeSelect}
          value={selectedValue}
          className="select is-success is-hovered"
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
      </div>

      <div className="menu">
        <p className="menu-label">
          Goods
        </p>
        <Goods goods={goods} />
      </div>
    </>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickReverse: PropTypes.func.isRequired,
  handleClickSortByAlphabet: PropTypes.func.isRequired,
  handleClickSortByLength: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.number.isRequired,
};
