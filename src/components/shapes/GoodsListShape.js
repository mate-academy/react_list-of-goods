import PropTypes from 'prop-types';
import { GoodShape } from './GoodShape';

export const GoodsListShape = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: GoodShape,
      id: PropTypes.number.isRequired,
    }),
  ),
};
