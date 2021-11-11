import React, { useState } from 'react';
import './App.css';

interface MyGoods {
  id: number; name: string;
}

const goodsFromServer: MyGoods[] = [
  { id: 1, name: 'Dumplings' },
  { id: 2, name: 'Carrot' },
  { id: 3, name: 'Eggs' },
  { id: 4, name: 'Ice cream' },
  { id: 5, name: 'Apple' },
  { id: 6, name: 'Bread' },
  { id: 7, name: 'Fish' },
  { id: 8, name: 'Honey' },
  { id: 10, name: 'Jam' },
  { id: 11, name: 'Garlic' },
];

const App: React.FC = () => {
  const [goods, setGoods] = useState<MyGoods[]>([]);
  const [checkedGoods, setCheckedGoods] = useState(0);

  function changeGoods(action:string) {
    switch (action) {
      case 'start':
        setGoods(goodsFromServer);

        break;

      case 'reverse':
        setGoods(prevState => [...prevState.reverse()]);
        break;

      case 'sort':
        setGoods(prevState => [...prevState.sort((a, b) => (a.name > b.name ? 1 : -1))]);
        break;

      case 'reset':
        setCheckedGoods(0);
        setGoods(goodsFromServer);

        break;

      default:
        break;
    }
  }

  function checkGoods(checkedId:number) {
    let nameLength = 0;

    goods.map((item) => {
      if (item.id === checkedId) {
        nameLength = item.name.length;
      }

      return item;
    });

    setCheckedGoods(checkedId);

    setGoods(prevState => [...prevState.filter(({ name }) => name.length >= nameLength)]);
  }

  return (
    <div className="App">
      <h1>Goods</h1>
      <ul>
        {goods.map(({ id, name }) => {
          return (
            <li key={id}>
              <input
                checked={id === checkedGoods}
                type="radio"
                name="goods"
                onChange={() => {
                  checkGoods(id);
                }}
              />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>

      {goods.length <= 0
        ? (
          <button
            type="button"
            onClick={() => {
              changeGoods('start');
            }}
          >
            Start
          </button>
        ) : ''}

      <button
        type="button"
        onClick={() => {
          changeGoods('reverse');
        }}
      >
        Reverse
      </button>

      <button
        type="button"
        onClick={() => {
          changeGoods('sort');
        }}
      >
        Sort alphabetically
      </button>

      {goods.length > 0
        ? (
          <button
            type="button"
            onClick={() => {
              changeGoods('reset');
            }}
          >
            Reset
          </button>
        ) : ''}
    </div>
  );
};

export default App;
