import React from 'react';
import { Content } from './Components/Content/Content';
import './App.css';

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

export class App extends React.PureComponent {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center">
        <h1>Goods</h1>
        <Content goods={goodsFromServer} />
      </div>
    );
  }
}
