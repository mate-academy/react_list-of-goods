import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ list }) => {
  const goodItems = list;

  return (
    <ul>
      {goodItems.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
