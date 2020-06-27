import PropTypes from 'prop-types';

export const GoodsListShape = PropTypes.shape({
  goods: PropTypes.string,
  height: PropTypes.string,
  maxLength: PropTypes.number,
});

export const ButtonsShape = PropTypes.shape({
  sortReverse: PropTypes.func,
  sortAlphabetically: PropTypes.func,
  sortByLength: PropTypes.func,
  reset: PropTypes.func,
});

export const ButtonToggleShape = PropTypes.shape({
  toggleButton: PropTypes.func,
  display: PropTypes.string,
});

export const GoodsSelectShape = PropTypes.shape({
  GoodsSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.number.isRequired),
});
