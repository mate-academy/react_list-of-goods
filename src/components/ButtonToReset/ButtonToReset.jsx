import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonToReset = ({ reset }) => (
  <Button basic color="pink" content="Reset" onClick={reset} />
);

ButtonToReset.propTypes = {
  reset: PropTypes.func.isRequired,
};
