import PropTypes from 'prop-types';

export const GoodListTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ButtonsTypes = {
  reverse: PropTypes.func.isRequired,
};

export const ButtonTypes = {
  classN: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const SelectTypes = {
  value: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired,
};
