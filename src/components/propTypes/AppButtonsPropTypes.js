import PropTypes from 'prop-types';

export const AppButtonsPropTypes = PropTypes.shape({
  reverseList: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByAlph: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
}).isRequired;
