import React from 'react';
import PropTypes from 'prop-types';

export const Button = React.memo(
  ({ onclick, purpose }) => (
    <button
      type="submit"
      className="button is-light is-grey is-rounded"
      onClick={onclick}
    >
      {purpose}
    </button>
  ),
);

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  purpose: PropTypes.string.isRequired,
};
