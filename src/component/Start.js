import PropTypes from 'prop-types';

const Start = props => props.children;

Start.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      children: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Start;
