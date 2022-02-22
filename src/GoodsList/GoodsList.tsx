import React from 'react';
import './GoodsList.scss';

// eslint-disable-next-line @typescript-eslint/naming-convention
type fromGoddsList = {
  dataServer: string[];
  isReverse: boolean;
  sortType: string;
  sizeFild: number;
};

interface State {
  data: fromGoddsList,
}

export const GoodsList: React.FC<State> = ({ data }) => {
  const {
    dataServer,
    isReverse,
    sortType,
    sizeFild,
  } = data;

  let newVisibleGoods = [...dataServer];

  if (sortType !== 'none') {
    newVisibleGoods.sort((prev, next) => {
      switch (sortType) {
        case 'length':
          return prev.length - next.length;
        case 'alfabet':
          return prev.localeCompare(next);
        default: return -1;
      }
    });
  }

  if (isReverse) {
    newVisibleGoods.reverse();
  }

  newVisibleGoods = newVisibleGoods.slice(0, sizeFild);

  return (
    <ul className="GoodsList">
      {newVisibleGoods.map(good => (
        <li key={good} className="GoodsList__item">
          {good}
        </li>
      ))}
    </ul>
  );
};
