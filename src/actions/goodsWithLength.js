const goodsWithLength = (listOfGoods, nameLength = 1) => listOfGoods
  .filter(
    product => product.length >= nameLength
  );

export default goodsWithLength;
