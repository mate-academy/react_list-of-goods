import React from 'react';

import PropTypes from 'prop-types';

function Start(props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

Start.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Start;
