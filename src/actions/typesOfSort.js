const goodsWithLength = (listOfGoods, nameLength = 1) => listOfGoods
  .filter(product => product.length >= nameLength);

const reverseGoods = listOfGoods => listOfGoods.reverse();

const sortAlphabetically = listOfGoods => listOfGoods.sort();

const sortByLength = listOfGoods => listOfGoods
  .sort(
    (prev, next) => prev.length - next.length
  );

export {
  goodsWithLength,
  reverseGoods,
  sortAlphabetically,
  sortByLength,
};
