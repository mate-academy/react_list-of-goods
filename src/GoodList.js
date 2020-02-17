import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = (props) => {
  const {
    goods,
    handleClickReverse,
    handleClickSort,
    handleClickReset,
    handleClickSortByLength,
    selectedOption,
    handleChangeSelect,
  } = props;

  return (
    <>
      <div className="wrapper">
        <button
          type="button"
          className="button"
          onClick={handleClickReverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickSort}
        >
          Alphabet
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickReset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={handleClickSortByLength}
        >
          Length
        </button>

        <select onChange={handleChangeSelect} value={selectedOption}>
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
      <ul className="list">
        {goods.map(item => <li key={item} className="list__item">{item}</li>)}
      </ul>
    </>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickReverse: PropTypes.func.isRequired,
  handleClickSort: PropTypes.func.isRequired,
  handleClickReset: PropTypes.func.isRequired,
  handleClickSortByLength: PropTypes.func.isRequired,
  selectedOption: PropTypes.number.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
};
