import React from 'react';
import PropTypes from 'prop-types';

export const CreateList = ({ list }) => (
  <>
    {list.map(good => (
      <li key={good}>{good}</li>
    ))}
  </>
);

CreateList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
