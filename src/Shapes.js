import PropTypes from 'prop-types';

export const ShapeGoodsItem = PropTypes.shape({
  item: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
});

export const ShapeGoodsList = PropTypes.shape({
  list: PropTypes.arrayOf(ShapeGoodsItem).isRequired,
  display: PropTypes.bool.isRequired,
  goodsDisplay: PropTypes.arrayOf(PropTypes.bool).isRequired,
});

export const ShapePrevious = PropTypes.shape({
  previous: PropTypes.func.isRequired,
});

export const ShapeButton = PropTypes.shape({
  action: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
});

export const ShapeOption = PropTypes.shape({
  digit: PropTypes.number.isRequired,
});

export const ShapeOptionsList = PropTypes.shape({
  i: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
  choose: PropTypes.func.isRequired,
});
