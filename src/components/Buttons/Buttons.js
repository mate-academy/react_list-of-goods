import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  const {
    letsReverse,
    letsSortAlphabetically,
    letsReset,
    letsSortByLength,
    dataOfgoodsLength,
    letsSelectByLength,
    selectedValue,
  } = props;

  return (
    <ul className="buttons-list">
      <li className="buttons-list__item">
        <button onClick={letsReverse} type="button">Reverse</button>
      </li>
      <li className="buttons-list__item">
        <button
          onClick={letsSortAlphabetically}
          type="button"
        >
          Sort alphabetically
        </button>
      </li>
      <li className="buttons-list__item">
        <button onClick={letsReset} type="button">Reset</button>
      </li>
      <li className="buttons-list__item">
        <button
          onClick={letsSortByLength}
          type="button"
        >
          Sort by length
        </button>
      </li>
      <li className="buttons-list__item">
        <label>
          Filter goods by length:
          <select onChange={letsSelectByLength} value={selectedValue}>
            <option value="0">No filtering</option>
            {dataOfgoodsLength.map(goodLength => (
              <option key={goodLength} value={goodLength}>{goodLength}</option>
            ))}
          </select>
        </label>
      </li>
    </ul>
  );
};

Buttons.propTypes = {
  letsReverse: PropTypes.func.isRequired,
  letsSortAlphabetically: PropTypes.func.isRequired,
  letsReset: PropTypes.func.isRequired,
  letsSortByLength: PropTypes.func.isRequired,
  dataOfgoodsLength: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  letsSelectByLength: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default Buttons;
