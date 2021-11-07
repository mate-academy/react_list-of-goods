import React from 'react';

type Props = {
  information: string[],
  isReversed: boolean,
  sortBy: string,
};

export const GoodsList: React.FC<Props> = ({
  information, isReversed, sortBy,
}) => {
  const arr = [...information];

  arr.sort((n1, n2) => {
    switch (sortBy) {
      case 'alphabetically':
        return n1.localeCompare(n2);

      case 'length':
        return n1.length - n2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    arr.reverse();
  }

  return (
    <ul>
      {arr.map(info => (
        <li key={info}>
          {info}
        </li>
      ))}
    </ul>
  );
};
