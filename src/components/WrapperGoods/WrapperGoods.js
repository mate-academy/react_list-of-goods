import React from 'react';

import Buttons from '../Buttons/Buttons';
import Select from '../Select/Select';
import GoodList from '../GoodList/GoodList';

const WrapperGoods = ({ goodsToRender, initialSelect, onClickReverse,
  onClickSortAlphabet, onClickReset, onClickSortLength,
  onClickSelectChanges, originalGoods }) => (

  <div className="wrapper">
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
