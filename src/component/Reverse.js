import PropTypes from 'prop-types';

const Reverse = props => props.children;

Reverse.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reverse;
