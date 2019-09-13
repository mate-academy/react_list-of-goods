import React from 'react';

import PropTypes from 'prop-types';

function SortAlphabetic(props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

SortAlphabetic.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SortAlphabetic;
