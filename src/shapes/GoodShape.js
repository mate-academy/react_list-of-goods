import PropTypes from 'prop-types';

export const GoodShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
