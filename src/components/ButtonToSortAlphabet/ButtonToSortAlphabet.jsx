import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export const ButtonToSortAlphabet = React.memo(
  ({ sort }) => (
    <Button basic color="pink" content="Sort alphabetically" onClick={sort} />
  ),
);

ButtonToSortAlphabet.propTypes = {
  sort: PropTypes.func.isRequired,
};
