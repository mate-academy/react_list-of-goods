import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './list.css';

const List = ({ goodsList }) => {
  const [goods, setGoods] = useState(goodsList);

  function reverseList() {
    setGoods([...goods].reverse());
  }

  function sortList(sorter) {
    setGoods([...goods].sort(sorter));
  }

  function resetList() {
    setGoods(goodsList);
  }

  const lengthSorter = (a, b) => a.length - b.length;
  const alphabetSorter = (a, b) => a.localeCompare(b);

  return (
    <div className="page">
      <h1 className="page__header">List of goods</h1>
      <div className="page__content">
        <ol className="page__list list">
          {goods.map(good => (
            <li className="list__item">
              {good}
            </li>
          ))
          }
        </ol>
        <div className="page__buttons">
          <button
            type="button"
            className="page__button"
            onClick={reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="page__button"
            onClick={() => sortList(alphabetSorter)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="page__button"
            onClick={resetList}
          >
            Reset
          </button>

          <button
            type="button"
            className="page__button"
            onClick={() => sortList(lengthSorter)}
          >
            Sort by length
          </button>
        </div>
      </div>
    </div>
  );
};

List.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export { List };
