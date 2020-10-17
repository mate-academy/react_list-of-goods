import PropTypes from 'prop-types';

export const GoodsTypes = {
  listGoods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  initialListGoods: PropTypes.arrayOf(
    PropTypes.string,
  ),
  updateGoods: PropTypes.func,
};
