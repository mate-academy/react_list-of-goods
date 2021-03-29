import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ list }) => (
  <>
    <ul className="goods-list">
      {list.map(good => (
        <li key={good}>{good}</li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(GoodsList);
