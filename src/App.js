import React from 'react';
import './App.css';
import ListOfGoods from './components/ListOfGoods';

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

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ListOfGoods goods={goodsFromServer} />
      </div>
    );
  }
}

export default App;
