import React from 'react';
import PropTypes from 'prop-types';
import './Start.css';

export const Start = ({ showGoodsList }) => (
  <div>
    <button
      className="app__button-start button is-primary is-outlined"
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
