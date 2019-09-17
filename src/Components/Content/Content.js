import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';
import Buttons from '../Buttons/Buttons';

const Content = ({
  handleReset,
  handleReverse,
  handleSortByLength,
  handleSort,
  handleWordLength,
  goods,
  currentSelect,
}) => (
  <>
    <Buttons
      currentSelect={currentSelect}
      handleReset={handleReset}
      handleReverse={handleReverse}
      handleSortByLength={handleSortByLength}
      handleSort={handleSort}
      handleWordLength={handleWordLength}
    />
    <ul className="content">
      {goods.map(item => (
        <li
          key={item}
          className="content__item"
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);

Content.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleReverse: PropTypes.func.isRequired,
  handleSortByLength: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleWordLength: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSelect: PropTypes.number.isRequired,
};

export default Content;
