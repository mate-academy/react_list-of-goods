import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodsListShape = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      ...GoodShape,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
