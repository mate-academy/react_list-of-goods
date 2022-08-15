import React from 'react';

type Props = {
  className: string,
  goods: string[],
  isStarted: boolean
};

export const GoodsList: React.FC<Props> = ({ className, goods, isStarted }) => {
  return (
    <ul className={className}>
      {isStarted
        && goods.map((good:string) => (
          <li className="Goods__item panel-block" key={good}>{good}</li>
        ))}
    </ul>
  );
};
