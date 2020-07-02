import PropTypes from 'prop-types';

export const validName = PropTypes.string;
export const validHandler = PropTypes.func;
export const validButton = PropTypes.shape({
  name: validName.isRequired,
  handler: validHandler.isRequired,
});
