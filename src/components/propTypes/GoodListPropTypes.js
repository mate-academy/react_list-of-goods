import PropTypes from 'prop-types';

export const GoodListPropTypes = (
  PropTypes.shape(PropTypes.arrayOf(PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }))).isRequired
);
