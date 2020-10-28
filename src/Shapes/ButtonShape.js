import PropTypes from 'prop-types';

export const ButtonShape = PropTypes.shape({
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRrequired,
  id: PropTypes.number.isRequired,
}).isRequired;
