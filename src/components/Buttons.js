import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Buttons = ({
  handleReverseClick,
  handleAlphaSortClick,
  handleResetClick,
  handleLengthSortClick,
  handleSelectClick,
  selectedOption,
  lengths,
}) => (
  <div className="goods__buttons-container">
    <Button onClick={handleReverseClick}>
      Reverse
    </Button>

    <Button onClick={handleAlphaSortClick}>
      Sort alphabetically
    </Button>

    <Button onClick={handleResetClick}>
      Reset
    </Button>

    <Button onClick={handleLengthSortClick}>
      Sort by length
    </Button>

    <select
      className="goods__select"
      value={selectedOption}
      onChange={handleSelectClick}
    >
      {lengths.map(length => (
        <option
          className="goods__option"
          key={length}
          value={length}
        >
          {`Show goods with length >= ${length}`}
        </option>
      ))}
    </select>
  </div>
);

Buttons.propTypes = {
  handleReverseClick: PropTypes.func.isRequired,
  handleAlphaSortClick: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleLengthSortClick: PropTypes.func.isRequired,
  handleSelectClick: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  lengths: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
};

export default Buttons;
