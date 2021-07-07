import PropTypes from 'prop-types';

export const GoodListTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ButtonsTypes = {
  onReverse: PropTypes.func.isRequired,
};

export const ButtonTypes = {
  className: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export const SelectTypes = {
  value: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export const ContentTypes = {
  onReverse: PropTypes.func.isRequired,
  onAlphabet: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onByLength: PropTypes.func.isRequired,
  onSelectNumber: PropTypes.func.isRequired,
  onDefaultSelect: PropTypes.func.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
