import React from 'react';
import PropTypes from 'prop-types';

export const ButtonsControl = (
  {
    reverse,
    setSortByAlphabet,
    setSortByLength,
    reset,
    setLength,
    length,
  },
) => (
  <>
    <button
      type="button"
      className="button btn btn-outline-primary"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button btn btn-outline-primary"
      onClick={setSortByAlphabet}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="button btn btn-outline-primary"
      onClick={reset}
    >
      Reset
    </button>
    <button
      type="button"
      className="button btn btn-outline-primary"
      onClick={setSortByLength}
    >
      Sort by length
    </button>
    <select
      className="form-select"
      id="inputGroupSelect01"
      value={length}
      onChange={event => setLength(event)}
      style={{
        width: '100px',
        display: 'inline-block',
      }}
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
      <option value="6">Six</option>
      <option value="7">Seven</option>
      <option value="8">Eight</option>
      <option value="9">Nine</option>
      <option value="10">Ten</option>
    </select>
  </>
);

ButtonsControl.propTypes = {
  reverse: PropTypes.func.isRequired,
  setSortByAlphabet: PropTypes.func.isRequired,
  setSortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  setLength: PropTypes.func.isRequired,
  length: PropTypes.func.isRequired,
};
