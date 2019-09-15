import React from 'react';
import { GoodProps } from 'prop-types';

import './Good.css';

const Good = (good) => {
  const { content } = good;

  return (
    <li className="goods-list__item list-group-item">{content}</li>
  );
};

Good.propTypes = GoodProps;

export default Good;
