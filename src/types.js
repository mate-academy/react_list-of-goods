import PropTypes from 'prop-types';

export const ButtonType = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const ListType = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const GoodsListType = {
  ...ListType,
  reverseHandler: ButtonType.handler,
  sortByName: ButtonType.handler,
  sortByLength: ButtonType.handler,
  resetHandler: ButtonType.handler,
};
