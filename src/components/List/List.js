import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
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
            <li className="list__item" key={good}>
              {good}
            </li>
          ))
          }
        </ol>
        <div className="page__buttons">
          <Button
            name="Reverse"
            handler={reverseList}
          />
          <Button
            name="Sort alphabetically"
            handler={() => sortList(alphabetSorter)}
          />
          <Button
            name="Reset"
            handler={resetList}
          />
          <Button
            name="Sort by length"
            handler={() => sortList(lengthSorter)}
          />
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
