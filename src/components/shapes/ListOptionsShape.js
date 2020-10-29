import PropTypes from 'prop-types';

export const ListOptionsShape = {
  reverseList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  minWordLength: PropTypes.number,
  selectLength: PropTypes.func.isRequired,
};
