import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemData }) => (
  <>
    {itemData}
  </>
);

Item.propTypes = {
  itemData: PropTypes.shape({
    itemData: PropTypes.string,
  }).isRequired,
};

export default Item;
