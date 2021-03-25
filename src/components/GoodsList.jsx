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
      handler={reverseHandler}
      text="Reverse"
    />

    <Button
      handler={sortByName}
      text="Sort alphabetically"
    />

    <Button
      handler={sortByLength}
      text="Sort by length"
    />

    <Button
      handler={resetHandler}
      text="Reset"
    />

    <List goods={goods} />
  </>
);

GoodsList.propTypes = GoodsListType;
