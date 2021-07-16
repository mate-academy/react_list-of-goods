import React from 'react';
import PropTypes from 'prop-types';

export const Start = props => (
  <button
    type="button"
    onClick={() => {
      props.app.start();
    }}
  >
    Start
  </button>
);

Start.propTypes = {
  app: PropTypes.shape().isRequired,
};
