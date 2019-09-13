import React from 'react';

import PropTypes from 'prop-types';

function SortByLength(props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}

SortByLength.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SortByLength;
