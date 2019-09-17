import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';
import './GoodsList.css';

const GoodsList = ({
  Goods,
  selected,
  handleReverse,
  handleSort,
  handleSortLength,
  handleReset,
  handleChange,
}) => (
  <>
    <Buttons
      selected={selected}
      handleReverse={handleReverse}
      handleSort={handleSort}
      handleSortLength={handleSortLength}
      handleReset={handleReset}
      handleChange={handleChange}
    />
    <ul className="ui list">
      {Goods.map(item => (
        <li className="item">{item}</li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  Goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleSortLength: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GoodsList;
