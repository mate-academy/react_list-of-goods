import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = React.memo(({ items }) => (
  <ul className="GoodsList">
    {
      items.map(item => (
        <li key={item.id}>
          {item.value}
        </li>
      ))
    }
  </ul>
));

GoodsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsList;
