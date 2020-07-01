import PropTypes from 'prop-types';

export const GoodsShape = PropTypes.shape({
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
});
