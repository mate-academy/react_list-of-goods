import React from 'react';
import './GoodsList.scss';

type Props = {
  list: string[];
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ list }) => {
    return (
      <>
        {list.length > 0 && (
          <h1 className="title">
            {`Goods count ${list.length}`}
          </h1>
        )}

        <ul className="list">
          {list.map(item => (
            <li key={item} className="list__item">
              {item}
            </li>
          ))}
        </ul>
      </>

    );
  },
);
