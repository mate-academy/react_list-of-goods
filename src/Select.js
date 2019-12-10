import React from 'react';

const Select = () => {
  const options = [];

  for (let i = 1; i < 11; i += 1) {
    options.push(<option value={i}>{ i }</option>);
  }

  return options;
};

export default Select;
