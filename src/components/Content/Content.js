import React from 'react';
import { ContentTypes } from '../Shape/Shape';
import { Buttons } from '../Buttons/Buttons';

export const Content = (props) => {
  const {
    onReverse,
    onAlphabet,
    onReset,
    onByLength,
    onSelectNumber,
    onDefaultSelect,
    goods,
  } = props;

  return (
    <div>
      <ul className="list-group">
        {goods.map(item => (
          <li
            className="list-group-item list-group-item-action"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>

      <Buttons
        onReverse={onReverse}
        onAlphabet={onAlphabet}
        onReset={onReset}
        onByLength={onByLength}
        onSelectNumber={onSelectNumber}
        onDefaultSelect={onDefaultSelect}
      />
    </div>
  );
};

Content.propTypes = ContentTypes;
