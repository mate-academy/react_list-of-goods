import PropTypes from 'prop-types';

const SortAlphabetic = props => props.children;

SortAlphabetic.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SortAlphabetic;
