import PropTypes from 'prop-types';
import { ShapeGoods } from './ShapeGood';

export const ShapeGoodsList = PropTypes.shape({
  goods: ShapeGoods.isRequired,
  onSortedReverse: PropTypes.func.isRequired,
  onSortedAlphabet: PropTypes.func.isRequired,
  onSortedLength: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  defaultSelect: PropTypes.number.isRequired,
});
