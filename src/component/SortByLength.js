import PropTypes from 'prop-types';

const SortByLength = props => props.children;

SortByLength.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SortByLength;
