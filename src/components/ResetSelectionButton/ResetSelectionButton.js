import React from 'react';
import PropTypes from 'prop-types';

export const ResetSelectionButton = (props) => {
  const handler = (event) => {
    props.children('1');
  };

  return (
    <button onClick={handler} type="button">
      Reset Select
    </button>
  );
};

ResetSelectionButton.propTypes = {
  children: PropTypes.func.isRequired,
};
