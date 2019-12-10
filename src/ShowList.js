import React from 'react';
import PropTypes from 'prop-types';

const ShowList = props => (
  <ul className="goods__list">
    {props.list.map(item => (
      <li
        key={item}
        className="list__item"
      >
        {item}
      </li>
    ))}
  </ul>
);

ShowList.propTypes = { list: PropTypes.arrayOf.isRequired };

export default ShowList;
