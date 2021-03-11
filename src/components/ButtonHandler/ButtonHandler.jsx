import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonHandler = React.memo(
  ({ handler, text }) => (
    <Button
      basic
      color="pink"
      content={text}
      onClick={handler}
    />
  ),
);

ButtonHandler.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
