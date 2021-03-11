import PropTypes from 'prop-types';
import React from 'react';

export const ButtonSortByLength = React.memo(
  props => (
    <button
      type="button"
      onClick={props.handler}
    >
      Sort by length
    </button>
  ),
);

ButtonSortByLength.propTypes = {
  handler: PropTypes.func.isRequired,
};
