import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ShowButton = React.memo(
  ({ visible }) => (
    <Button
      basic
      color="pink"
      content="Start"
      onClick={visible}
    />
  ),
);

ShowButton.propTypes = {
  visible: PropTypes.func.isRequired,
};
