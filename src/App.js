import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { GoodList } from './components/GoodList';
import { ControlersGoods } from './components/Buttons';
import { Select } from './components/Select/Select';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    goods: preparedGoods,
    isVisibleGoods: false,
    isVisibleButton: true,
    minLength: 1,
  }

  start = () => {
    this.setState(({ isVisibleGoods, isVisibleButton }) => ({
      isVisibleGoods: !isVisibleGoods,
      isVisibleButton: !isVisibleButton,
    }));
  }

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  changeMinLength = ({ target }) => {
    this.setState({
      minLength: +target.value,
    });
  }

  sortByAlph = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  sortByLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.name.length - b.name.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: preparedGoods,
      minLength: 1,
    });
  }

  filterGoods = () => {
    const { goods, minLength } = this.state;

    return goods.filter(({ name }) => name.length >= minLength);
  }

  render() {
    const {
      state: { isVisibleGoods, minLength, isVisibleButton },
      start,
      reverse,
      sortByAlph,
      sortByLength,
      reset,
      changeMinLength,
      filterGoods,
    } = this;

    return (
      <div className="App m-auto">
        {
          isVisibleButton && (
            <button
              className="btn btn-warning"
              type="button"
              onClick={start}
            >
              Start
            </button>
          )
        }

        {isVisibleGoods && (
          <>
            <div className="mb-3">
              <ControlersGoods
                reverse={reverse}
                sortByAlph={sortByAlph}
                sortByLength={sortByLength}
                reset={reset}
              />

              <Select
                minLength={minLength}
                changeMinLength={changeMinLength}
              />
            </div>

            <GoodList goods={filterGoods()} />
          </>
        )}
      </div>
    );
  }
}

export default App;
