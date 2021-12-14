import React from 'react';
import { Goods } from './Components/Goods/Goods';
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
  start: boolean,
  isReversed: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    start: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => (
    this.setState({
      start: true,
    })
  );

  reverse = () => (
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
      start,
      isReversed,
      sortBy,
    } = this.state;

    let currentGoods = [...goods];

    if (sortBy) {
      currentGoods = [...currentGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default: return 0;
        }
      });
    }

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        {start && (
          <div className="buttons">
            <button
              type="button"
              onClick={this.reverse}
              className="buttons__item"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
              className="buttons__item"
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className="buttons__item"
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="buttons__item"
            >
              Reset
            </button>
          </div>
        )}

        {!start ? (
          <button
            type="button"
            onClick={this.showList}
            className="buttons__item"
          >
            Start
          </button>
        ) : (
          <Goods goods={[...currentGoods]} />
        )}
      </div>
    );
  }
}

export default App;
