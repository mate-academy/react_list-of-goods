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
  goods: string[],
  isListVisible: boolean,
  isReversed: boolean
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isListVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showGoodsList = () => {
    this.setState({ isListVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
    });
  };

  render() {
    const { goods, isReversed, sortBy } = this.state;

    const sortedGoods = [...goods];

    sortedGoods.sort((item1, item2) => {
      switch (sortBy) {
        case 'length':
          return item1.length - item2.length;

        case 'alphabet':
          return item1.localeCompare(item2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        <div className="sorter">
          {this.state.isListVisible || (
            <button
              className="ui big green button"
              type="button"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )}
          {this.state.isListVisible && (
            <div className="ui segments">
              <div className="ui segment">
                <div className="ui huge header">
                  Goods
                </div>
              </div>
              <div className="ui segment">
                <GoodsList goods={sortedGoods} />
                <div className="two ui buttons">
                  <button
                    className="ui button"
                    type="button"
                    onClick={this.sortByAlph}
                  >
                    Sort By Alphabet
                  </button>

                  <button
                    className="ui button"
                    type="button"
                    onClick={this.sortByLength}
                  >
                    Sort By Length
                  </button>
                </div>

                <div className="two ui buttons">
                  <button
                    className="ui button"
                    type="button"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>

                  <button
                    className="ui button"
                    type="button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
