import React from 'react';
import './App.css';

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
  goodsServer: string[];
  isStarted: boolean;
  isReversed: boolean;
  isSorted: boolean;
  sortBy: string;
  value: number;
};

class App extends React.Component <{}, State> {
  state = {
    goodsServer: goodsFromServer,
    isStarted: false,
    isReversed: false,
    isSorted: false,
    sortBy: '',
    value: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState(prev => ({ isReversed: !prev.isReversed }));
  };

  reset = () => {
    this.setState({ isReversed: false, isSorted: false, value: 1 });
  };

  sortByName = () => {
    this.setState({ sortBy: 'name', isSorted: true });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length', isSorted: true });
  };

  onChange = (event: { target: { value: string } }) => {
    this.setState({ value: Number(event.target.value) });
  };

  render() {
    const {
      goodsServer,
      isStarted,
      isReversed,
      isSorted,
      sortBy,
      value,
    } = this.state;

    const goods = [...goodsServer].filter(product => product.length >= value);

    if (isSorted) {
      goods.sort((product1, product2) => {
        switch (sortBy) {
          case 'name':
            return product1.localeCompare(product2);

          case 'length':
            return product1.length - product2.length;

          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="app">
        <h1>Goods</h1>
        {isStarted && (
          <>
            <div>
              <ul>
                {
                  goods.map(product => (
                    <li key={product}>
                      {product}
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="app__buttons">
              <button
                className="app__button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="app__button"
                type="button"
                onClick={this.sortByName}
              >
                Sort by name
              </button>

              <button
                className="app__button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="app__button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <select name="select" value={value} onChange={this.onChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </>
        )}

        {!isStarted && (
          <button
            className="app__button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
