import PropTypes from 'prop-types';

export const GoodListShape = PropTypes.shape(PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}))).isRequired;
