import PropTypes from 'prop-types';

export const ShapeButton = PropTypes.shape({
  title: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
});
