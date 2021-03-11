import PropTypes from 'prop-types';
import React from 'react';

export const ButtonSortAlphabetically = React.memo(
  props => (
    <button
      type="button"
      onClick={props.handler}
    >
      Sort alphabetically
    </button>
  ),
);

ButtonSortAlphabetically.propTypes = {
  handler: PropTypes.func.isRequired,
};
