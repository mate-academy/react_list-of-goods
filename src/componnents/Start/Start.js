import React from 'react';
import PropTypes from 'prop-types';

export const Start = ({ showGoodsList }) => (
  <div>
    <button
      type="button"
      onClick={showGoodsList}
      className="btn btn-success btn-lg btn-block"
    >
      Start
    </button>
  </div>
);

Start.propTypes = {
  showGoodsList: PropTypes.func.isRequired,
};
