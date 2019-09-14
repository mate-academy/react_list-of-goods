const sortByLength = listOfGoods => listOfGoods
  .sort(
    (prev, next) => prev.length - next.length
  );

export default sortByLength;
