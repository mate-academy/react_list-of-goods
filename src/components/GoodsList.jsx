import React from 'react';
import { GoodsListType } from '../types';
import { Button } from './Button';
import { List } from './List';

export const GoodsList = ({
  goods,
  reverseHandler,
  sortByName,
  sortByLength,
  resetHandler,
}) => (
  <>
    <Button
      onClick={reverseHandler}
      text="Reverse"
    />

    <Button
      onClick={sortByName}
      text="Sort alphabetically"
    />

    <Button
      onClick={sortByLength}
      text="Sort by length"
    />

    <Button
      onClick={resetHandler}
      text="Reset"
    />

    <List goods={goods} />
  </>
);

GoodsList.propTypes = GoodsListType;
