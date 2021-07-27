import PropTypes from 'prop-types';

export const buttonProp = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const listProp = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  state: PropTypes.shape({
    showList: PropTypes.bool.isRequired,
    isReversed: PropTypes.bool.isRequired,
    sortBy: PropTypes.string.isRequired,
  }),
};
