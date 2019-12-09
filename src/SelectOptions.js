import React from 'react';

const SelectOptions = () => {
  const options = [];

  for (let i = 1; i <= 10; i += 1) {
    options.push(<option value={i}>{ i }</option>);
  }

  return options;
};

export default SelectOptions;
