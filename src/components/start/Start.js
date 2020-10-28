import React from 'react';
import PropTypes from 'prop-types';

export const Start = ({ showGoodsList }) => (
  <div>
    <button
      className="ui inverted purple button"
      type="button"
      onClick={showGoodsList}
    >
      Start
    </button>
  </div>
);

Start.propTypes = {
  showGoodsList: PropTypes.func.isRequired,
};
