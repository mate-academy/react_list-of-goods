import React from 'react';

import PropTypes from 'prop-types';

const Buttons = ({
  listBySelect,
  isListShown,
  setSelectValue,
  selectedValue,
  handleStart,
  reverseList,
  sortByAlphabet,
  resetList,
  sortByLength,
}) => (
  <>
    { !isListShown
      && (
        <button
          className="button-start"
          type="button"
          onClick={handleStart}
        >
          Start
        </button>
      )
    }

    { isListShown
    && (
      <>
        <div className="buttons-goods">
          <button
            className="button-goods"
            type="button"
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            className="button-goods"
            type="button"
            onClick={resetList}
          >
            Reset
          </button>

          <button
            className="button-goods"
            type="button"
            onClick={sortByAlphabet}
          >
            Sort by alphabetic
          </button>

          <button
            className="button-goods"
            type="button"
            onClick={reverseList}
          >
            Reverse
          </button>
        </div>

        <div>
          <select
            className="select-goods"
            value={selectedValue}
            name="goodsList"
            onChange={event => setSelectValue(event.target)}
          >
            <option value={0}>0</option>
            {listBySelect.map(elem => (
              <option key={elem} value={elem}>{elem}</option>
            ))}
          </select>
        </div>
      </>
    )
    }
  </>
);

Buttons.propTypes = {
  listBySelect: PropTypes.func.isRequired,
  isListShown: PropTypes.bool.isRequired,
  setSelectValue: PropTypes.func.isRequired,
  selectedValue: PropTypes.number.isRequired,
  handleStart: PropTypes.func.isRequired,
  reverseList: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Buttons;
