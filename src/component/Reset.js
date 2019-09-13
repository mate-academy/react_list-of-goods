import PropTypes from 'prop-types';

const Reset = props => props.children;

Reset.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reset;
