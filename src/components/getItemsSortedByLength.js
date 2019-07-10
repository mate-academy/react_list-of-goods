const getItemsSortedByLength = ({ goods, lengthKey, currentKey }) => {
  if (currentKey === lengthKey) {
    return [...goods].reverse();
  }

  return [...goods]
    .sort((a, b) => a.length - b.length);
};

export default getItemsSortedByLength;
