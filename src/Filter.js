import React from 'react';
import PropTypes from 'prop-types';

function Filter({ title, callback }) {
  return (
    <button type="button" onClick={() => callback()}>{title}</button>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Filter;
