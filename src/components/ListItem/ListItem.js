import PropTypes from 'prop-types';

const ListItem = ({ good }) => good;

ListItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default ListItem;
