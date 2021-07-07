import React from 'react';
import PropTypes from 'prop-types';
import Good from '../Good/Good';

const GoodList = React.memo(
  ({ goods }) => (
    <ul className="app__goodList">
      {goods.map(good => (
        <Good
          key={good.id}
          {...good}
        />
      ))}
    </ul>
  ),
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      good: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  good: PropTypes.string.isRequired,
};

export default GoodList;
