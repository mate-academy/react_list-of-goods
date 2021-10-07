import React from 'react';

import './GoodList.css';

interface Props {
  list: string[];
}

export const GoodsList: React.FC<Props> = (props) => {
  const { list } = props;

  return (
    <ul className="List">
      {list.map(good => (
        <li className="List__item">
          {good}
        </li>
      )) }
    </ul>
  );
};
