import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ResetButton = React.memo(
  ({ reset }) => (
    <Button
      basic
      color="pink"
      content="Reset"
      onClick={reset}
    />
  ),
);

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired,
};
