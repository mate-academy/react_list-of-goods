import PropTypes from 'prop-types';

export const GoodListTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ButtonsTypes = {
  onReverse: PropTypes.func.isRequired,
};

export const ButtonTypes = {
  className: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const SelectTypes = {
  value: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};
