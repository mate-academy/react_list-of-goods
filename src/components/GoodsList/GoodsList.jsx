import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export function GoodsList({ goodsList }) {
  return (
    <>
      <ul>
        {goodsList.map(good => (
          <li
            key={good}
            className="list__item"
          >
            {good}
          </li>
        ))}
      </ul>
    </>
  );
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default React.memo(GoodsList);
