import React from 'react';
import PropTypes, { string } from 'prop-types';

export const GoodsList = ({
  goods,
  visibility,
  sortByAlphabeticalOrder,
  sortByLength,
  reverseList,
  reset,
}) => (
  <div className="mx-6">
    {visibility
    && (
      <>
        <ul>
          {goods.map(good => (
            <li key={good}>
              {`- ${good}`}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="button is-primary is-rounded m-2"
          onClick={reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-link is-rounded m-2"
          onClick={sortByAlphabeticalOrder}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-danger is-rounded m-2"
          onClick={reset}
        >
          Reset
        </button>

        <button
          type="button"
          className="button is-warning is-rounded m-2"
          onClick={sortByLength}
        >
          Sort by length
        </button>
      </>
    )}
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
  visibility: PropTypes.bool.isRequired,
  sortByAlphabeticalOrder: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reverseList: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
