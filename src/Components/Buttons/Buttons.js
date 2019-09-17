import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';
import Button from '../Button/Button';

const Buttons = ({
  handleReset,
  handleReverse,
  handleSortByLength,
  handleSort,
  handleWordLength,
  currentSelect,
}) => (
  <>
    <div className="container">
      <Button
        type="button"
        className="button"
        onClick={handleReverse}
        value={currentSelect}
        name="Reverse"
      />
      <Button
        type="button"
        className="button"
        onClick={handleSortByLength}
        name="Sort By length"
      />
      <Button
        type="button"
        className="button"
        onClick={handleSort}
        name="Sort alhabetically"
      />
      <Button
        type="button"
        className="button"
        onClick={handleReset}
        name="Reset"
      />
    </div>
    <div className="wrapper">
      <label
        htmlFor="goodsLength"
        className="label"
      >
        Good length:
        {' '}
      </label>
      <select
        name="select"
        id="goodsLength"
        onChange={handleWordLength}
        value={currentSelect}
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
  </>
);

Buttons.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleWordLength: PropTypes.func.isRequired,
  currentSelect: PropTypes.func.isRequired,
};

export default Buttons;
