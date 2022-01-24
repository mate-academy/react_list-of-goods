import React from 'react';

type Props = {
  props: string[];
};

export const GoodsList: React.FC<Props> = ({ props }) => {
  return (
    <ul>
      {props.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
