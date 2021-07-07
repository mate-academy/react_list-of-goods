import PropTypes from 'prop-types';

export const ShapeGood = PropTypes.string.isRequired;

export const ShapeGoods = PropTypes.arrayOf(ShapeGood).isRequired;
