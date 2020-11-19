import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const MyButton = React.memo(
  ({ text, onClick, variant }) => (
    <Button
      type="button"
      onClick={onClick}
      variant={variant}
      className="rounded-pill m-2"
    >
      {text}
    </Button>
  ),
);

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

MyButton.defaultProps = {
  variant: 'outline-success',
};
