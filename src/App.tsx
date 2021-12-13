import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodsList';

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
  isVisible: boolean,
  visibleGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    visibleGoods: [...goodsFromServer],
  };

  reverseGoods = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].sort((good1, good2) => good1.localeCompare(good2)),
    }));
  };

  reset = () => {
    this.setState({
      visibleGoods: goodsFromServer,
    });
  };

  sortByLength = () => {
    this.setState(({ visibleGoods }) => ({
      visibleGoods: [...visibleGoods].sort((good1, good2) => good1.length - good2.length),
    }));
  };

  render() {
    const { visibleGoods, isVisible } = this.state;

    return (
      <div className="App App__wrapper">
        <div className="App__container">
          {!isVisible
            ? (
              <button
                type="button"
                className="App__button"
                onClick={() => this.setState({ isVisible: true })}
              >
                Start
              </button>
            )
            : (
              <>
                <div className="App__list">
                  <GoodList goods={visibleGoods} />
                </div>
                <div className="App__buttons">
                  <button
                    type="button"
                    className="App__button"
                    onClick={this.reverseGoods}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="App__button"
                    onClick={this.sortAlphabetically}
                  >
                    Sort by alphabetically
                  </button>

                  <button
                    type="button"
                    className="App__button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="App__button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
        </div>
      </div>
    );
  }
}

export default App;
