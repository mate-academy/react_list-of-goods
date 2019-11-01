import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  reverse, sort, reset, sortByLength,
}) => (
  <>
    <button className="medium ui button" type="button" onClick={reverse}>
      <i className="arrows alternate vertical icon" />
    </button>
    <button className="medium ui button" type="button" onClick={sort}>
      <i className="sort alphabet down icon" />
    </button>
    <button className="medium ui button" type="button" onClick={reset}>
      <i className="undo icon" />
    </button>
    <button className="medium ui button" type="button" onClick={sortByLength}>
      <i className="sort amount down icon" />
    </button>
  </>
);

Button.propTypes = {
  reverse: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Button;
