import PropTypes from 'prop-types';
import React from 'react';

export const ButtonShowList = React.memo(props => (
  <button
    type="button"
    onClick={props.handler}
  >
    Start
  </button>
));

ButtonShowList.propTypes = {
  handler: PropTypes.func.isRequired,
};
