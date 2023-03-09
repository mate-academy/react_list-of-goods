import { Component } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  visibilityGoods: boolean;
};

export default class App extends Component<{}, State> {
  state = {
    visibilityGoods: false,
  };

  showGoods = () => {
    this.setState(prevState => (
      { visibilityGoods: !prevState.visibilityGoods }
    ));
  };

  render() {
    const { visibilityGoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {visibilityGoods
          ? <GoodsList goods={goodsFromServer} />
          : <button onClick={this.showGoods} type="button">Start</button> }
      </div>
    );
  }
}
