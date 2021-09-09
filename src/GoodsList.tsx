import React from 'react';

import './App.scss';

type Props = {
  item: string;
};

const GoodsList: React.FC<Props> = (props) => {
  const { item } = props;

  return (
    <ul className="list-group list">
      <li className="list-group-item list-item" key={item}>
        {item}
      </li>
    </ul>
  );
};

export default GoodsList;
