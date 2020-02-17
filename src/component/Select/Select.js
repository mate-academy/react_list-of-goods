import React from 'react';
import PropsTypes from 'prop-types';

export const Select = (props) => {
  const { callbackUpdateData, originalGoodsFromServer, defaultSelect } = props;
  const selectFunc = (e) => {
    callbackUpdateData(
      originalGoodsFromServer.filter(goods => goods.length >= e.target.value),
    );
  };

  return (
    <>
      <label htmlFor="goods">Choose length of visible items:</label>
      <select id="goods" onChange={selectFunc} value={defaultSelect}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </>
  );
};

export const propTypesButtons = {
  callbackUpdateData: PropsTypes.func.isRequired,
  originalGoodsFromServer: PropsTypes.arrayOf(PropsTypes.string).isRequired,
  defaultSelect: PropsTypes.bool,
};

Select.propTypes = propTypesButtons;

Select.defaultProps = {
  defaultSelect: undefined,
};
