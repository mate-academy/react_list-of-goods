import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

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

interface State {
  goods: string[],
  sortBy: string,
  start: boolean,
  isReversed: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    sortBy: '',
    start: false,
    isReversed: false,
  };

  showList = () => (
    this.setState({
      start: true,
    })
  );

  reverseList = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }))
  );

  sortByAlphabet = () => (
    this.setState({
      sortBy: 'alphabet',
    })
  );

  sortByLength = () => (
    this.setState({
      sortBy: 'length',
    })
  );

  reset = () => (
    this.setState({
      sortBy: '',
      isReversed: false,
    })
  );

  render() {
    const {
      goods,
      sortBy,
      start,
      isReversed,
    } = this.state;

    let currentGoods = [...goods];

    if (sortBy) {
      currentGoods = [...currentGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>

        {start && (
          <div className="App__buttons">
            <button
              type="button"
              className="App__button"
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              className="App__button"
              onClick={this.sortByAlphabet}
            >
              Sort by alphabet
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
        )}

        {!start ? (
          <button
            type="button"
            className="App__button App__button--start"
            onClick={this.showList}
          >
            Start
          </button>
        ) : (
          <GoodsList goods={[...currentGoods]} />
        )}
      </div>
    );
  }
}

export default App;
