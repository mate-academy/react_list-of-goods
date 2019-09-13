import React from 'react';

import PropTypes from 'prop-types';

function Reverse(props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

Reverse.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reverse;
