import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods';

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
  isListVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    isListVisible: true,
  };

  seeTheListOfGoods = () => {
    this.setState({ isListVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>
        {!this.state.isListVisible
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <button
              className="App__button"
              type="button"
              onClick={this.seeTheListOfGoods}
            >
              start
            </button>
          )}
      </div>
    );
  }
}

export default App;
