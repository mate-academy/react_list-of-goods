import React from 'react';

import Buttons from '../Buttons/Buttons';
import Select from '../Select/Select';
import GoodList from '../GoodList/GoodList';

const WrapperGoods = ({ goodsToRender, initialSelect, onClickReverse,
  onClickSortAlphabet, onClickReset, onClickSortLength,
  onClickSelectChanges, className, originalGoods }) => (

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
      originalGoods={originalGoods}
    />

    <GoodList
      goodsToRender={goodsToRender}
    />

  </div>
);

export default WrapperGoods;
