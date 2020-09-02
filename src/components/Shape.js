import PropTypes from 'prop-types';

export const ButtonShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
});

export const SelectShape = PropTypes.shape({
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
});
