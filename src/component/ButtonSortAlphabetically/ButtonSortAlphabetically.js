import React from 'react';
import PropsTypes from 'prop-types';

export const ButtonSortAlphabetically = (props) => {
  const { callbackUpdateData, goodsFromServer } = props;
  const sortedArr = [...goodsFromServer].sort((a, b) => a.localeCompare(b));

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      ButtonSortAlphabetically
    </button>
  );
};

ButtonSortAlphabetically.propTypes = {
  callbackUpdateData: PropsTypes.func.isRequired,
  goodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};
