import React from 'react';
import style from './GoodsList.module.css';

interface Props {
  goods: string[],
}

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className={style.list}>
    {
      goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))
    }
  </ul>
);

export default GoodsList;
