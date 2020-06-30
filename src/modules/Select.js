import React from 'react';

const SelectElements = () => {
  const selectElements = [];
  let i = 1;

  while (selectElements.length < 10) {
    selectElements.push(i);
    i += 1;
  }

  return (
    <>
      {selectElements.map(element => (
        <option value={element} key={element}>{element}</option>
      ))}
    </>
  );
};

export default SelectElements;
