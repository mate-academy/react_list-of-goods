/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const GoodsFromServer = ({ data }) => (
  <ul>
    {data.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

GoodsFromServer.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    data: PropTypes.string.isRequired,
  })).isRequired,
};

export default GoodsFromServer;
