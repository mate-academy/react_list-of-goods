import PropTypes from 'prop-types';

export const ButtonsShape = {
  onSort: PropTypes.func.isRequired,
  onReverse: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onLengthCase: PropTypes.func.isRequired,
};
