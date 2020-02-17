import React from 'react';
import PropsTypes from 'prop-types';

export const ButtonSortByLength = (props) => {
  const { callbackUpdateData, goodsFromServer } = props;
  const sortedArr = [...goodsFromServer]
    .sort((a, b) => b.length - a.length);

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      ButtonSortByLength
    </button>
  );
};

ButtonSortByLength.propTypes = {
  callbackUpdateData: PropsTypes.func.isRequired,
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
