import React from 'react';
import PropTypes from 'prop-types';

export const ButtonStart = ({ renderListOfGoods }) => (
  <div className="button-container">
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={renderListOfGoods}
    >
      Start
    </button>
  </div>
);

ButtonStart.propTypes = {
  renderListOfGoods: PropTypes.func.isRequired,
};
