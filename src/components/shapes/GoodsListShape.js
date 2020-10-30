import PropTypes from 'prop-types';

export const GoodsListShape = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};
