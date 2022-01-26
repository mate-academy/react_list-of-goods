import React from 'react';

interface Props {
  goodsFromServer : string[],
}

export const GoodList: React.FC<Props> = ({ goodsFromServer }) => (
  <ul className="list-group list">
    {goodsFromServer.map((item) => (
      <li key={item} className="list-group-item list-group-item-info">
        {item}
      </li>
    ))}
  </ul>
);
