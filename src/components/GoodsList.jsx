import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ good }) => (
  <>
    <li className="app__list-item">
      {good}
    </li>
  </>
);

GoodsList.propTypes = {
  good: PropTypes.string.isRequired,
}.isRequired;

export default GoodsList;
