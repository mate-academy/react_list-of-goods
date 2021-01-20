import React from 'react';
import classNames from 'classnames';
import './App.scss';
import { GoodsList } from './components/GoodsList';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    startedList: false,
    reversed: false,
    sortBy: '',
  };

  isStarted = () => {
    this.setState({ startedList: true });
  };

  resetList = () => {
    this.setState({
      sortBy: '',
      reversed: false,
    });
  };

  sortedList = (sortBy, goods) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'string':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    return visibleGoods;
  };

  isReversed = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  render() {
    const { goods, startedList, sortBy, reversed } = this.state;
    const visibleGoods = this.sortedList(sortBy, goods);

    if (reversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          className={classNames(
            'App__button',
            { 'App__button--hidden': startedList },
          )}
          onClick={this.isStarted}
        >
          Start
        </button>
        {startedList && <GoodsList goodsList={visibleGoods} />}
        <div
          className={classNames(
            'App__buttons',
            { 'App__buttons--visible': startedList },
          )}
        >
          <button
            type="button"
            className="App__button"
            onClick={this.isReversed}
          >
            Reverse
          </button>
          <button
            type="button"
            className="App__button"
            onClick={() => this.setState({ sortBy: 'string' })}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="App__button"
            onClick={() => this.setState({ sortBy: 'length' })}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="App__button"
            onClick={this.resetList}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
