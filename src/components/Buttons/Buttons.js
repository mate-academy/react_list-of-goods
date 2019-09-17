import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const Buttons = ({
  handleReverse,
  handleSort,
  handleSortLength,
  handleReset,
  handleChange,
  selected,
}) => (
  <>
    <div className="buttons">
      <button
        type="button"
        className="ui secondary button"
        onClick={handleReverse}
      >
        Reverse
      </button>
      <button
        type="button"
        className="ui secondary button"
        onClick={handleSort}
      >
        Sort
      </button>
      <button
        type="button"
        className="ui secondary button"
        onClick={handleSortLength}
      >
        Sort length
      </button>
      <button
        type="button"
        className="ui secondary button"
        onClick={handleReset}
      >
        Reset
      </button>
      <div className="selects">
        <select
          name="length"
          id="selectedLength"
          onChange={handleChange}
          value={selected}
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
    </div>
  </>
);

Buttons.propTypes = {
  selected: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleSortLength: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Buttons;
