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
    goods: [...goodsFromServer],
    startedList: false,
  };

  isStarted = () => {
    this.setState({ startedList: true });
  };

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortedList = (sortBy) => {
    const { goods } = this.state;

    const sortedGoods = goods.sort((a, b) => {
      switch (sortBy) {
        case 'string':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    this.setState({
      goods: sortedGoods,
    });
  };

  isReversed = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  render() {
    const { goods, startedList } = this.state;
    const visibleGoods = goods;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          !startedList
            && (
              <button
                type="button"
                className="App__button"
                onClick={this.isStarted}
              >
                Start
              </button>
            )}
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
            onClick={() => {
              this.sortedList('string');
            }}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="App__button"
            onClick={() => {
              this.sortedList('length');
            }}
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
