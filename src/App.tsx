import React from 'react';
import classNames from 'classnames';
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
};

class App extends React.Component<{}, State> {
  state = {
    goods: [],
  };

  showList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetic = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((g1, g2) => g2.length - g1.length),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showList}
          className={classNames(
            'button m-5 is-primary',
            {
              'is-hidden': goods.length > 0,
            },
          )}
        >
          Start
        </button>
        <GoodsList goods={goods} />
        <div
          className={goods.length > 0
            ? 'buttons ml-5'
            : 'is-hidden'}
        >
          <button
            type="button"
            className="button is-info"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button is-info"
            onClick={this.sortAlphabetic}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button is-info"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={this.showList}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
