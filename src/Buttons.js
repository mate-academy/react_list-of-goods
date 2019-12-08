import React from 'react';

const Buttons = (props) => {
  const buttons = Object.keys(props);
  const buttonsName = [
    'Reverse',
    'Sort alphabetically',
    'Reset',
    'Sort by length'];

  return (
    <div className="goods__buttons">
      {buttons.map((item, index) => (
        <button
          key={item}
          className="button"
          type="button"
          onClick={props[item]}
        >
          {buttonsName[index]}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
