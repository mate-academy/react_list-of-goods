import React from 'react';

const Options = () => {
  const optionsArr = [];

  for (let i = 1; i <= 10; i += 1) {
    optionsArr.push(<option value={i}>{ i }</option>);
  }

  return optionsArr;
};

export default Options;
