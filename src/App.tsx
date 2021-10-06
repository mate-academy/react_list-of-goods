/* eslint-disable react/prefer-stateless-function */
import React from 'react';
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
  isVisibly: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    isVisibly: false,
  };

  showGoods = () => {
    this.setState(() => ({
      isVisibly: true,
    }));
  };

  render() {
    const { isVisibly } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {isVisibly
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              className="App__button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
