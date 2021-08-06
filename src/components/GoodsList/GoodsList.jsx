import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.scss';
// import { v4 as uuidv4 } from 'uuid';
import { Card } from '../Card';

export const GoodsList = ({ goods, images }) => (
  <ul className="goodsList">
    {
      goods.map((good) => {
        const goodImage = images.find(obj => obj[good]);

        return (
          <li
            className="wrapper"
            // key={uuidv4()}
            key={good}
          >
            <Card
              good={good}
              goodImage={goodImage}
            />
          </li>
        );
      })
    }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
