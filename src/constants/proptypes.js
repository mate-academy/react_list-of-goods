import PropTypes from 'prop-types';

export const ButtonTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const SelectTypes = {
  rows: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const GoodTypes = {
  good: PropTypes.string.isRequired,
};

export const GoodsTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
