import React from 'react';

import PropTypes from 'prop-types';

function Reset(props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

Reset.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reset;
