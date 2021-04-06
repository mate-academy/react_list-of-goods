import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

const countSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const GoodList = React.memo(
  ({
    // eslint-disable-next-line react/prop-types
    goodsList,
    mainButton,
    buttonReverse,
    buttonSort,
    buttonReset,
    buttonSortByLength,
    buttonSelect,
    selectDefault,
  }) => (
    <div hidden={mainButton}>
      <ul className="list-group list-group-flush">
        {
        // eslint-disable-next-line react/prop-types
          goodsList.map(good => (
            <li
              className="list-group-item
              list-group-item-action list-group-item-success"
              key={good.id}
            >
              {good.nameGoods}
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={buttonReverse}>reverse</button>
      <button type="button" onClick={buttonSort}>sort</button>
      <button type="button" onClick={buttonReset}>reset</button>
      <button type="button" onClick={buttonSortByLength}>Sort by length</button>
      <select value={selectDefault} onChange={buttonSelect}>
        {
        countSelect.map((element, index) => (
          <option value={index + 1} key={uuidv4()}>
            {element}
          </option>
        ))
      }
      </select>
    </div>
  ),
);

GoodList.propTypes = {
  mainButton: PropTypes.bool.isRequired,
  buttonReverse: PropTypes.func.isRequired,
  buttonSort: PropTypes.func.isRequired,
  buttonReset: PropTypes.func.isRequired,
  buttonSortByLength: PropTypes.func.isRequired,
  buttonSelect: PropTypes.func.isRequired,
  selectDefault: PropTypes.number.isRequired,
};
