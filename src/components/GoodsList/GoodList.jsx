import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.css';

import { GoodItem } from '../GoodItem';
import { ReverseButton } from '../ReverseButton';
import { SortButton } from '../SortButton';
import { ResetButton } from '../ResetButton';

export const GoodList = React.memo(
  ({
    goodsList,
    goodsFromServer,
    reverse,
    alphabeticalSort,
    lengthSort,
    reset,
    select,
  }) => (
    <>
      <select
        className="App__select select"
        onChange={(event) => {
          select(+event.target.value);
        }}
      >
        {goodsFromServer.map((good) => {
          const index = goodsFromServer.indexOf(good) + 1;

          return <option key={index} value={index}>{index}</option>;
        })}
      </select>

      <ul className="App__list list">
        {goodsList.map(good => <GoodItem good={good} key={good} />)}
      </ul>

      <div className="App__buttons buttons">
        <ReverseButton reverse={reverse} />

        <SortButton
          alphabeticalSort={alphabeticalSort}
          lengthSort={lengthSort}
        />

        <ResetButton reset={reset} />
      </div>
    </>
  ),
);

GoodList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  goodsFromServer: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  reverse: PropTypes.func.isRequired,
  alphabeticalSort: PropTypes.func.isRequired,
  lengthSort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
};
