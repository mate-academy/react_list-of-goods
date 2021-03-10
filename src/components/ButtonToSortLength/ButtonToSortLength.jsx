import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonToSortLength = React.memo(
  ({ sort }) => (
    <Button basic color="pink" content="Sort by length" onClick={sort} />
  ),
);

ButtonToSortLength.propTypes = {
  sort: PropTypes.func.isRequired,
};
