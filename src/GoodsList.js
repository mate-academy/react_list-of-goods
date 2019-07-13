import React from 'react';
import propTypes from 'prop-types';

const GoodList = ({ list }) => (
  <ul className="list">
    {
      list.map((item, index) => (
        <li key={list[index]}>{item}</li>
      ))
    }
  </ul>
);

GoodList.propTypes = {
  list: propTypes.shape().isRequired,
};

export default GoodList;
