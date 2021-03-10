import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonToReverse = React.memo(
  ({ reverse }) => (
    <Button basic color="pink" content="Reverse" onClick={reverse} />
  ),
);

ButtonToReverse.propTypes = {
  reverse: PropTypes.func.isRequired,
};
