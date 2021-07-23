import PropTypes from 'prop-types';

const SelectPropTypes = {
  onChange: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default SelectPropTypes;
