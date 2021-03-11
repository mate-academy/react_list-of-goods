import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const SortByAlphabetButton = React.memo(
  ({ sort }) => (
    <Button
      basic
      color="pink"
      content="Sort alphabetically"
      onClick={sort}
    />
  ),
);

SortByAlphabetButton.propTypes = {
  sort: PropTypes.func.isRequired,
};
