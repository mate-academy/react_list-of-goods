import React from 'react';
import PropTypes from 'prop-types';

const ListOfGoods = ({ items }) => (
  <>
    <ul className="ui list">
      {items.map(good => (
        <li key={good} className="ui list">
          {good}
        </li>
      ))}
    </ul>
  </>
);

ListOfGoods.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGoods;
