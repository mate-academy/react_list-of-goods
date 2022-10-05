import React from 'react';

type Props = {
  lists: string[]
};

export const GoodsList: React.FC<Props> = ({ lists }) => {
  return (
    <ul>
      {lists.map(list => (
        <li
          key={list}
          data-cy="Good"
        >
          {list}
        </li>
      ))}
    </ul>
  );
};
