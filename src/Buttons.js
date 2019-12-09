import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ reverse, sortByName, reset, sortByLength }) {
  return (
    <>
      <button type="button" onClick={() => reverse()}>reverse</button>
      <button type="button" onClick={() => sortByName()}>sort by name</button>
      <button type="button" onClick={() => reset()}>reset</button>
      <button type="button" onClick={() => sortByLength()}>sort by len</button>
    </>
  );
}

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Buttons;
