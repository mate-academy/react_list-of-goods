import PropTypes from 'prop-types';

export const prepearedGoodsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
