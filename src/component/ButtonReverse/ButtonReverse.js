import React from 'react';
import PropsTypes from 'prop-types';

export const ButtonReverse = (props) => {
  const { goodsFromServer, callbackUpdateData } = props;
  const sortedArr = [...goodsFromServer].reverse();

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      Reverse
    </button>
  );
};

ButtonReverse.propTypes = {
  callbackUpdateData: PropsTypes.func.isRequired,
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
