import React from 'react';
import PropsTypes from 'prop-types';
import { ButtonReverse } from '../ButtonReverse/ButtonReverse';
import { ButtonSortAlphabetically }
  from '../ButtonSortAlphabetically/ButtonSortAlphabetically';
import { ButtonReset } from '../ButtonReset/ButtonReset';
import { ButtonSortByLength } from '../ButtonSortByLength/ButtonSortByLength';
import { Select } from '../Select/Select';

export const ButtonList = (props) => {
  const {
    goodsFromServer,
    callbackUpdateData,
    originalGoodsFromServer,
  } = props;

  return (
    <div>
      <ButtonReverse
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonSortAlphabetically
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonReset
        originalGoodsFromServer={originalGoodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonSortByLength
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <Select
        originalGoodsFromServer={originalGoodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />
    </div>
  );
};

ButtonList.propTypes = {
  callbackUpdateData: PropsTypes.func.isRequired,
  originalGoodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
