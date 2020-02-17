import React from 'react';
import { propTypesButtons } from '../Select/Select';

export const ButtonReset = (props) => {
  const { callbackUpdateData, originalGoodsFromServer } = props;
  const sortedArr = [...originalGoodsFromServer];

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      Reset
    </button>
  );
};

ButtonReset.propTypes = propTypesButtons;
