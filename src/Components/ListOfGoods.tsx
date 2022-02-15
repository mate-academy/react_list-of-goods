import React from 'react';

type Props = {
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  itemsLength: null | number;
};

export const ListOfGoods: React.FC<Props> = ({
  goods, isReversed, sortBy, itemsLength,
}) => {
  let goodsCopy = [...goods];

  if (itemsLength !== null) {
    goodsCopy = goodsCopy.filter((item) => item.length <= itemsLength);
  }

  goodsCopy.sort((item1: string, item2: string) => {
    switch (sortBy) {
      case 'letter':
        return item1.localeCompare(item2);

      case 'itemLength':
        return item1.length - item2.length;

      default:
        return 0;
    }
  });

  const listOfGoodsItems = goodsCopy.map((item) => (
    <li key={item}>
      {item}
    </li>
  ));

  if (isReversed) {
    listOfGoodsItems.reverse();
  }

  const listOfGoods = (
    <ul>
      {listOfGoodsItems}
    </ul>
  );

  return listOfGoods;
};
