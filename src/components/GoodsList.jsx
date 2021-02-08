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
    {visibleGoods.map(product => (
      <li key={product} className="item">
        <span className={`item-text ${selectedGoods.includes(product)
          ? 'active' : ''}`}
        >
          {product}
        </span>
        <div className="buttons">
          <button
            type="button"
            onClick={() => addSelectedGoods(product)}
            className={classNames(`add`, {
              addSelected: selectedGoods.includes(product),
            })}
          >
            Select
          </button>
          {selectedGoods.includes(product) && (
            <button
              type="button"
              onClick={() => removeSelectedGoods(product)}
              className="remove"
            >
              Remove
            </button>
          )}
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
