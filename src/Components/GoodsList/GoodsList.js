import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ props }) => {
  const list = props;

  return (
    <ul>
      {list.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
