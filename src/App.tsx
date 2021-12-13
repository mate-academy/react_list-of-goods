import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList';
import { ControlButtons } from './components/ControlButtons';

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
  goods: string[];
  isShown: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShown: false,
  };

  sortAlphabetically = () => {
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
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { goods, isShown } = this.state;

    return (
      <div className="App">
        <div className="goods">
          {isShown
            && (
              <>
                <GoodList goods={goods} />
                <ControlButtons
                  reverse={this.reverse}
                  sortAlphabetically={this.sortAlphabetically}
                  reset={this.reset}
                  sortByLength={this.sortByLength}
                />
              </>
            )}
          {!isShown && (
            <button
              type="button"
              className="btn-start btn"
              onClick={() => this.setState({ isShown: true })}
            >
              Start your groccery journey
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
