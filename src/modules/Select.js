import React from 'react';
import PropTypes from 'prop-types';

const SelectElements = (props) => {
  const { selectByLength } = props;
  const selectElements = [];
  let i = 1;

  while (selectElements.length < 10) {
    selectElements.push(i);
    i += 1;
  }

  return (
    <select onChange={selectByLength} className="goodsList__select">
      {selectElements.map(element => (
        <option value={element} key={element}>{element}</option>
      ))}
    </select>

  );
};

SelectElements.propTypes = {
  selectByLength: PropTypes.func.isRequired,
};

export default SelectElements;
