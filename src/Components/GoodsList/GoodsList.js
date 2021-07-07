import React from 'react';
import { GoodsSection } from '../GoodsSection/GoodsSection';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { ShapeGoodsList } from '../Shapes/ShapeGoodsList';

export const GoodsList = (props) => {
  const {
    goods,
    onSortedReverse,
    onSortedAlphabet,
    onSortedLength,
    onReset,
    defaultSelect,
    onSelected,
  } = props;

  return (
    <>
      <GoodsSection
        goods={goods}
      />
      <div className="d-flex justify-content-between">
        <Button
          title="Reverse"
          onClick={onSortedReverse}
        />
        <Button
          title="Sort ABC"
          onClick={onSortedAlphabet}
        />
        <Button
          title="Sort by length"
          onClick={onSortedLength}
        />
        <Button
          title="Reset"
          onClick={onReset}
        />
        <Select
          defaultSelect={defaultSelect}
          quantity={10}
          onSelected={onSelected}
        />
      </div>
    </>
  );
};

GoodsList.propTypes = ShapeGoodsList.isRequired;
