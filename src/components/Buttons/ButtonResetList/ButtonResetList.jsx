import PropTypes from 'prop-types';
import React from 'react';

export const ButtonResetList = React.memo(
  props => (
    <button
      type="button"
      onClick={props.handler}
    >
      Reset
    </button>
  ),
);

ButtonResetList.propTypes = {
  handler: PropTypes.func.isRequired,
};
