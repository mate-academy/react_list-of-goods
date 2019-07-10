const getAlphabeticalSorting = ({ goods, alphabetKey, currentKey }) => {
  if (currentKey === alphabetKey) {
    return [...goods].reverse();
  }

  return [...goods]
    .sort((a, b) => a.localeCompare(b));
};

export default getAlphabeticalSorting;
