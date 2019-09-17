import React from 'react';
import './Usability.css';

const Usability = ({
  handleClickReverse,
  handleClickSort,
  handleClickSortByLength,
  handleClickReset,
  handleChange,
  minLength,
}) => (
  <div className="Usability-block">
    <div className="yellow ui vertical buttons">
      <button type="button" onClick={handleClickReverse} className="ui button">
        Reverse
      </button>
      <button type="button" onClick={handleClickSort} className="ui button">
        Alphabet sort
      </button>
      <button type="button" onClick={handleClickSortByLength} className="ui button">
        Length sort
      </button>
    </div>
    <button type="button" onClick={handleClickReset} className="negative ui button">
      Reset
    </button>
    <select
      name="length"
      id="lenghtChoose"
      onChange={handleChange}
      className="ui selection dropdown"
      value={minLength}
    >
      <option selected value="1">
        1
      </option>
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
);

export default Usability;
