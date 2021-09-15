import React from 'react';

type Props = {
  goods: string[];
  changeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const GoodsSelected: React.FC<Props> = (props) => {
  const { goods, changeHandler } = props;

  return (
    <select
      name="goodsLength"
      className="btn btn-outline-secondary btn-block col-12"
      onChange={changeHandler}
      value="1"
    >
      {goods.map((item: string) => (
        <option
          value={goods.indexOf(item) + 1}
          key={item}
        >
          {goods.indexOf(item) + 1}
        </option>
      ))}
    </select>
  );
};
