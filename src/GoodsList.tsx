import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  goods: string[]
}

export const GoodsList: React.FC<Props> = (props) => {
  const { goods } = props;

  return (
    <ul className="w-25">
      {goods.map(good => (
        <li
          key={good}
          className="border border-success rounded p-1 m-1 text-center"
        >
          {good}
        </li>
      ))}
    </ul>
  );
};
