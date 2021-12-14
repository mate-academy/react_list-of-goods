import React from 'react';
import './App.scss';

import { Buttons } from './Components/Buttons/Buttons';
import { GoodsList } from './Components/GoodsList/GoodsList';

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
  visibility: boolean,
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visibility: false,
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.localeCompare(goodB)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.length - goodB.length),
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { visibility, goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>
        <div className="goods">
          {visibility
          && (
            <>
              <GoodsList goods={goods} />
              <Buttons
                sortByAlphabet={this.sortByAlphabet}
                sortByLength={this.sortByLength}
                reverse={this.reverse}
                reset={this.reset}
              />
            </>
          )}
          {!visibility
          && (
            <button
              type="button"
              className="button__start button"
              onClick={() => this.setState({ visibility: !visibility })}
            >
              Start
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
