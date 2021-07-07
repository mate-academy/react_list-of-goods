import PropTypes from 'prop-types';

export const ButtonsShapes = {
  reverse: PropTypes.func.isRequired,
  alphabetSort: PropTypes.func.isRequired,
  lengthSort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  lengthFilter: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  select: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
