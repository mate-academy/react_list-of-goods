import React from 'react';
import PropTypes from 'prop-types';

const ListItems = ({ goods }) => (
  <>
    {goods.map(good => (
      <li className="item" key={good}>
        {good}
      </li>
    ))
    }
  </>
);

ListItems.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default ListItems;
