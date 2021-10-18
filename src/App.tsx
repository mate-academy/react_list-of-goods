import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  length: number,
}
class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
    length: 1,
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetic' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({ sortBy: '', length: 1 });
  };

  render() {
    const {
      isVisible,
      isReversed,
      sortBy,
      length,
    } = this.state;

    const visibleGoods = this.state.goods.filter(good => good.length >= length);

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabetic':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    const selectLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isVisible: !isVisible });
            }}
          >
            Start
          </button>
        )}
        {isVisible && (
          <div className="GoodsList">
            <GoodsList goods={visibleGoods} />
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <span> Select length of good:</span>
            <select
              className="buttons-block__select"
              value={length}
              onChange={(event) => {
                this.setState({ length: +event.target.value });
              }}
            >
              {selectLength.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
}

// const App: React.FC = () => (
//   <div className="App">
//     <h1>Goods</h1>
//     {goodsFromServer.length}
//   </div>
// );

export default App;
