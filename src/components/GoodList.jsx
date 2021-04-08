import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

const countSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const classNameItem = {
  0: 'list-group-item list-group-item-action list-group-item-primary',
  1: 'list-group-item list-group-item-action list-group-item-secondary',
  2: 'list-group-item list-group-item-action list-group-item-success',
  3: 'list-group-item list-group-item-action list-group-item-danger',
  4: 'list-group-item list-group-item-action list-group-item-warning',
  5: 'list-group-item list-group-item-action list-group-item-info',
  6: 'list-group-item list-group-item-action list-group-item-light',
  7: 'list-group-item list-group-item-action list-group-item-dark',
  8: 'list-group-item list-group-item-action list-group-item-primary',
  9: 'list-group-item list-group-item-action list-group-item-success',
  10: 'list-group-item list-group-item-action list-group-item-secondary',
};

export const GoodList = React.memo(
  ({
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
          goodsList.map((good, index) => (
            <li
              className={classNameItem[index]}
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
  goodsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  mainButton: PropTypes.bool.isRequired,
  buttonReverse: PropTypes.func.isRequired,
  buttonSort: PropTypes.func.isRequired,
  buttonReset: PropTypes.func.isRequired,
  buttonSortByLength: PropTypes.func.isRequired,
  buttonSelect: PropTypes.func.isRequired,
  selectDefault: PropTypes.number.isRequired,
};
