import React from 'react';
import PropTypes from 'prop-types';

const ButtonsSort = ({
  data, reverse, sort, reset, sortByLength, changeCount, selectRef,
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
    <select
      className="ui floating dropdown labeled search icon button"
      onChange={changeCount}
      ref={selectRef}
    >
      {data.map((_item, index) => (
        <option
          key={_item.id}
          value={index}
        >
          {index + 1}
        </option>
      ))}
    </select>
  </>
);

ButtonsSort.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  reverse: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  changeCount: PropTypes.func.isRequired,
  selectRef: PropTypes.string.isRequired,
};

export default ButtonsSort;
