import PropTypes from 'prop-types';

export const ButtonType = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const ListType = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const GoodsListType = {
  ...ListType,
  reverseHandler: ButtonType.onClick,
  sortByName: ButtonType.onClick,
  sortByLength: ButtonType.onClick,
  resetHandler: ButtonType.onClick,
};
