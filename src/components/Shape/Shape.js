import PropTypes from 'prop-types';

export const GoodListTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const ButtonsTypes = {
  reverse: PropTypes.func.isRequired,
};
