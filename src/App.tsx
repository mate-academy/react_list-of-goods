import React from 'react';
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

type State = {
  goods: string[],
  count: number,
  isReversed: boolean,
  sortBy: string,
  lengths: number[],
  selectedNumb: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    count: 0,
    isReversed: false,
    sortBy: '',
    lengths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedNumb: 1,
  };

  showList = () => {
    this.setState({ count: 1 });
  };

  changeLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedNumb: Number(event.target.value) });
  };

  reverseList = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      selectedNumb: 1,
    });
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alpha' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const {
      count, goods, isReversed, sortBy, lengths, selectedNumb,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= selectedNumb);

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alpha':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <div className="App__info">
          {count === 1 && (
            <ul className="App__goods">
              {visibleGoods.map(good => (
                <li className="App__good" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          )}
          <button
            className={count === 1 ? 'disabled' : 'App__open'}
            type="button"
            onClick={this.showList}
          >
            Click here
          </button>
          <div className="App__sort">
            <button
              className={count === 1 ? 'App__button' : 'disabled'}
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              className={count === 1 ? 'App__button' : 'disabled'}
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className={count === 1 ? 'App__button' : 'disabled'}
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              className={count === 1 ? 'App__button' : 'disabled'}
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
        </div>
        <select
          className={count === 1 ? 'App__select' : 'disabled'}
          id="selectLength"
          onChange={(event) => (
            this.changeLength(event)
          )}
        >
          {lengths.map(length => (
            <option
              value={length}
            >
              {length}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
