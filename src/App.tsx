import React from 'react';
import './App.scss';

import { GoodsList } from './components/GoodsList/GoodsList';
import { Buttons } from './components/GoodsList/Buttons/Buttons';

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
  goods: string[],
  visible: boolean,
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visible: false,
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAB = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.localeCompare(goodB)),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.length - goodB.length),
    }));
  };

  render() {
    const { visible, goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Products</h1>
        <div className="goods">
          {visible
          && (
            <>
              <GoodsList goods={goods} />
              <Buttons
                reverse={this.reverse}
                sortAB={this.sortAB}
                reset={this.reset}
                sortByLength={this.sortByLength}
              />
            </>
          )}
          {!visible && (
            <button
              type="button"
              className="button__start button"
              onClick={() => this.setState({ visible: !visible })}
            >
              Start shopping
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
