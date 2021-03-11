import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonForList = React.memo(
  ({ onCLick, text }) => (
    <Button
      basic
      color="pink"
      content={text}
      onClick={onCLick}
    />
  ),
);

ButtonForList.propTypes = {
  onCLick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
