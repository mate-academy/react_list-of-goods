import React from 'react';
import './ListOptions.scss';

import { ListOptionsShape } from '../shapes/ListOptionsShape';

export const ListOptions = React.memo(({
  reverseList,
  resetList,
  sortByAlphabet,
  sortByLength,
  minWordLength,
  selectLength,
}) => (
  <div className="list-options">
    <div className="list-options__buttons">
      <button
        type="button"
        className="list-options__button button"
        onClick={reverseList}
      >
        Reverse
      </button>

      <button
        type="button"
        className="list-options__button button"
        onClick={sortByAlphabet}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        className="list-options__button button"
        onClick={sortByLength}
      >
        Sort by length
      </button>

      <button
        type="button"
        className="list-options__button button"
        onClick={resetList}
      >
        Reset
      </button>
    </div>

    <p className="list-options__paragraph">Minimal word length:</p>
    <select
      className="list-options__select"
      value={minWordLength}
      onChange={
        event => selectLength(event.target.value)
      }
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={10}>10</option>
    </select>
  </div>
));

ListOptions.propTypes = ListOptionsShape;

ListOptions.defaultProps = {
  minWordLength: 1,
};
