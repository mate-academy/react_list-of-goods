import React from 'react';
import { ListOfGoods } from './components/ListOfGoods';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
      <div className="App container-fluid">
        <h1 className="App__title">
          Goods
        </h1>
        {!this.state.isListVisible
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <button
              type="button"
              className="App__btn btn btn-primary"
              onClick={this.seeTheListOfGoods}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
