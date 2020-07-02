import React from 'react';
import PropType from 'prop-types';
import './SortButton.css';

export const SortButton = ({ name, onClickHandle }) => (
  <button
    className="goods__sort-btn"
    type="button"
    onClick={onClickHandle}
  >
    {name}
  </button>
);

SortButton.propTypes = {
  name: PropType.string.isRequired,
  onClickHandle: PropType.func.isRequired,
};
