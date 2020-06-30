import React from 'react';
import { GoodsSelectShape } from '../../shapes';

export const GoodsSelect = (props) => {
  const { selectLength, options, selected } = props;

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label
          className="input-group-text"
          htmlFor="inputGroupSelect"
        >
          Item length more then...
        </label>
      </div>
      <select
        className="custom-select"
        onChange={e => selectLength(e.target.value)}
        value={selected}
      >
        {options.map(val => (
          <option
            key={val}
            value={val + 1}
          >
            {val + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

GoodsSelect.propTypes = GoodsSelectShape.isRequired;
