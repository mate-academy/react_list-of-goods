import classNames from 'classnames';
import React from 'react';
import './App.css';
import GoodsList from './Components/GoodsList/GoodsList';

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
  isStarted: boolean,
  goods: string[],
  isReversed: boolean,
  isSortedAlph: boolean,
  isSortedLength: boolean,
  length: number,
};

class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    goods: goodsFromServer,
    isReversed: false,
    isSortedAlph: false,
    isSortedLength: false,
    length: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlph = () => {
    this.setState(state => ({
      isSortedLength: false,
      isSortedAlph: !state.isSortedAlph,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      isSortedAlph: false,
      isSortedLength: !state.isSortedLength,
    }));
  };

  reset = () => {
    this.setState({
      isSortedLength: false,
      isSortedAlph: false,
      isReversed: false,
      length: 1,
    });
  };

  render() {
    const {
      isStarted,
      goods,
      isReversed,
      isSortedAlph,
      isSortedLength,
      length,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= length);

    if (isSortedAlph) {
      visibleGoods.sort((a, b) => a.localeCompare(b));
    }

    if (isSortedLength) {
      visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {isStarted ? (
          <>
            <GoodsList goods={visibleGoods} />

            <div className="select is-success">
              <select
                name="length"
                value={length}
                onChange={(event) => this.setState({
                  length: +event.target.value,
                })}
              >
                {[...new Array(10)].map((_, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={this.reverse}
              className={classNames(
                'button is-info',
                { 'is-success': isReversed },
              )}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlph}
              className={classNames(
                'button is-info',
                { 'is-success': isSortedAlph },
              )}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className={classNames(
                'button is-info',
                { 'is-success': isSortedLength },
              )}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="button is-danger"
            >
              Reset
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => this.setState({ isStarted: true })}
            className="button is-primary"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
