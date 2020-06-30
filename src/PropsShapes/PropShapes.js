import PropTypes, { string } from 'prop-types';

export const goodsShapes = PropTypes.arrayOf(string);

export const buttonShapes = {
  click: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export const lengthSelectionShapes = {
  change: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};
