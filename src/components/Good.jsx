import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <>
    <li className="app__list-item">
      {good}
    </li>
  </>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
}.isRequired;

export default Good;
