import React from 'react';
import PropsTypes from 'prop-types';

export const Select = (props) => {
  const { callbackUpdateData, originalGoodsFromServer } = props;
  const selectFunc = (e) => {
    callbackUpdateData(
      originalGoodsFromServer.filter(goods => goods.length >= e.target.value),
    );
  };

  return (
    <>
      <label htmlFor="goods">Choose length of visible items:</label>
      <select id="goods" onChange={selectFunc}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  );
};

export const propTypesButtons = {
  callbackUpdateData: PropsTypes.func.isRequired,
  originalGoodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

Select.propTypes = propTypesButtons;
