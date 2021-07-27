import React from 'react';
import './App.css';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    listOfGoods: [...goodsFromServer],
  };

  listReverse = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.reverse(),
    }));
  }

  listSortAlphabetically = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort(),
    }));
  }

  resetList = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: [...goodsFromServer],
    }));
  }

  sortByLengthList = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort(
        (prevGood, nextGood) => prevGood.length - nextGood.length,
      ),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <ListOfGoods goodsFromServer={goodsFromServer} />
      </div>
    );
  }
}

export default App;
