import React from 'react';
import Buttons from '../Buttons/Buttons';
import Select from '../Select/Select';
import GoodList from '../GoodList/GoodList';

const WrapperGoods = ({ goodsToRender, initialSelect, onClickReverse,
  onClickSortAlphabet, onClickReset, onClickSortLength,
  onClickSelectChanges, className }) => (

  <div className={className}>
    <Buttons
      onClickReverse={onClickReverse}
      onClickSortAlphabet={onClickSortAlphabet}
      onClickReset={onClickReset}
      onClickSortLength={onClickSortLength}
    />

    <Select
      initialSelect={initialSelect}
      onClickSelectChanges={onClickSelectChanges}
    />

    <GoodList
      goodsToRender={goodsToRender}
    />

  </div>
);

export default WrapperGoods;
