import React from 'react';

interface Props {
  list: string[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map(good => (
        <li>
          {good}
        </li>
      )) }
    </ul>
  );
};
