import React from 'react';
import Button from 'react-bootstrap/Button';
import GoodsList from './GoodsList/GoodsList';

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

export default class App extends React.Component {
  state = {
    isStartScreen: true,
  };

  showListOfGoods = () => {
    this.setState({ isStartScreen: false });
  };

  render() {
    return (
      <div className="App container">
        <h1>Goods 1</h1>
        {this.state.isStartScreen
          ? (
            <Button onClick={this.showListOfGoods} size="lg" variant="info">
              Start
            </Button>
          )
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}
