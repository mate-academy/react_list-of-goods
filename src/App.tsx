import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

interface Good {
  name: string;
  id: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

type Props = {};

interface State {
  showGoods: boolean;
  isReversed: boolean;
  sortBy: string;
}

class App extends React.Component<Props, State> {
  state = {
    showGoods: false,
    isReversed: false,
    sortBy: '',
  };

  showTheGoods = () => this.setState({
    showGoods: true,
  });

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  resetTheGoods = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  render() {
    const { showGoods, isReversed, sortBy } = this.state;
    const copyGoods = [...goodsFromServer];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.name.localeCompare(good2.name);
        case 'length':
          return good1.name.length - good2.name.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        <h1>
          React list of goods
        </h1>
        {showGoods ? (
          <ul className="goods">
            { copyGoods.map(good => (
              <li className="goods_list" key={good.id}>
                {good.name}
              </li>
            ))}
          </ul>
        )
          : (
            <button
              type="button"
              onClick={this.showTheGoods}
            >
              Start
            </button>
          )}
        <button
          type="button"
          onClick={this.reverseGoods}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.resetTheGoods}
        >
          Reset
        </button>
      </div>

    );
  }
}

export default App;
