import PropTypes from 'prop-types';

export const ShapeGoodsItem = PropTypes.shape({
  item: PropTypes.string.isRequired,
});

export const ShapeGoodsList = PropTypes.shape({
  list: PropTypes.arrayOf(ShapeGoodsItem).isRequired,
});

export const ShapePrevious = PropTypes.shape({
  previous: PropTypes.func.isRequired,
});
