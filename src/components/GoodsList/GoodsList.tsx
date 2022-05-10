import React from 'react';
import './GoodsList.scss';

type Props = {
  list: string[];
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ list }) => {
    return (
      <ul className="list">
        {list.length > 0 && (
          <h1 className="title">
            {`Goods count ${list.length}`}
          </h1>
        )}

        {list.map(item => (
          <li key={item} className="list__item">
            {item}
          </li>
        ))}
      </ul>
    );
  },
);
