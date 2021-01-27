import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const GoodsList = ({
  visibleGoods,
  selectedGoods,
  addSelectedGoods,
  removeSelectedGoods,
}) => (
  <ul className="list">
    {visibleGoods.map(el => (
      <li key={el} className="item">
        <span className={`item-text, ${selectedGoods.includes(el)
          ? 'active' : ''}`}
        >
          {el}
        </span>
        <div className="buttons">
          <button
            type="button"
            onClick={() => addSelectedGoods(el)}
            className={classNames(`add`, {
              addSelected: selectedGoods.includes(el) === true,
            })}
          >
            Select
          </button>
          <button
            type="button"
            onClick={() => removeSelectedGoods(el)}
            className="remove"
          >
            Remove
          </button>
        </div>
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  visibleGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGoods: PropTypes.arrayOf(PropTypes.object).isRequired,
  addSelectedGoods: PropTypes.func.isRequired,
  removeSelectedGoods: PropTypes.func.isRequired,
};
