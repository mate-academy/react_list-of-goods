import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uniqueKey } from 'uuid';
import './GoodsList.scss';

export const GoodsList = React.memo(({ goods }) => (
  <ul className="product">
    {goods.map((item) => {
      const key = uniqueKey();

      return (<li key={key} className="product__item">{item}</li>);
    })}
  </ul>
));

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
