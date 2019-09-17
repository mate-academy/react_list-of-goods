import PropTypes from 'prop-types';

export const ButtonProps = {
  text: PropTypes.string.isRequired,
};

export const GoodProps = {
  good: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export const GoodsListProps = {
  goodsFromServer: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
