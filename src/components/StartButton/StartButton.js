import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const StartButton = ({ toggleVisible }) => (
  <Button
    type="button"
    onClick={toggleVisible}
  >
    Start
  </Button>
);

StartButton.propTypes = {
  toggleVisible: PropTypes.func.isRequired,
};
