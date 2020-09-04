import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const GoodList = ({ goods, visibility }) => (
  <ul
    className={classNames({
      'good-list': true,
      invisible: !visibility,
      visible: visibility,
    })}
  >
    {goods.map(good => (
      <li
        key={good}
        className="good-item"
      >
        {good}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.bool.isRequired,
};
