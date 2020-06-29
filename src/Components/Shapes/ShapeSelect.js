import PropTypes from 'prop-types';

export const ShapeSelect = PropTypes.shape({
  defaultSelect: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
});
