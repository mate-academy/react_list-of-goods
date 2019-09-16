import PropTypes from 'prop-types';

export const ButtonTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const SelectShape = {
  name: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
};

export const SelectTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(SelectShape)),
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export const GoodTypes = {
  good: PropTypes.string.isRequired,
};

export const GoodsListTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
