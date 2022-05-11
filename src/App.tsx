import React from 'react';
import './App.css';
import { GoodList } from './Components/GoodList';

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
  isShowList: boolean,
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShowList: false,
  };

  startShowList = () => {
    this.setState({
      isShowList: true,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { isShowList } = this.state;

    return (
      <div className="App">
        {!isShowList ? (
          <button
            type="button"
            onClick={this.startShowList}
            className="button-start"
          >
            Start
          </button>
        ) : (
          <div className="App__content">
            <h1>Goods</h1>
            <div>
              <button
                type="button"
                onClick={this.reverse}
                className="button"
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
                className="button"
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
                className="button"
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.reset}
                className="button"
              >
                Reset
              </button>
            </div>

            <GoodList goods={this.state.goods} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
