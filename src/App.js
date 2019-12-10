import React from 'react';
import './App.css';
import GoodList from './GoodsList';

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
    isStarted: false,
    visibleGoods: [...goodsFromServer],
    selectedLength: 1,
  };

  toStart = () => {
    this.setState(prevState => (
      { isStarted: true }));
  };

  toReverse = () => {
    this.setState(prevState => (
      { visibleGoods: [...prevState.visibleGoods].reverse() }));
  };

  toSortAlphabetically = () => {
    this.setState(prevState => (
      { visibleGoods: [...prevState.visibleGoods].sort() }));
  };

  toReset = () => {
    this.setState(prevState => ({
      visibleGoods: [...goodsFromServer],
      selectedLength: 1,
    }));
  };

  toSortByLength = () => {
    this.setState(prevState => ({
      visibleGoods: [...prevState.visibleGoods]
        .sort((a, b) => (a.length - b.length)),
    }));
  };

  toSelectByLength = ({ target: { value } }) => {
    this.setState(prevState => ({
      visibleGoods: goodsFromServer
        .filter(good => (good.length >= value)),
      selectedLength: value,
    }));
  };

  render() {
    const { isStarted, visibleGoods, selectedLength } = this.state;
    const lengthsForSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filters = [
      { name: 'Reverse', callback: this.toReverse },
      { name: 'Sort Alphabetically', callback: this.toSortAlphabetically },
      { name: 'Reset', callback: this.toReset },
      { name: 'Sort by length', callback: this.toSortByLength }];

    return (
      <section className="goods">
        {isStarted || (
          <button
            onClick={this.toStart}
            type="button"
            className="goods__button goods__button--start"
          >
            Start
          </button>
        )}
        {isStarted && (
          <>
            <div className="goods__buttons">
              {filters.map(filter => (
                <button
                  onClick={filter.callback}
                  type="button"
                  className="goods__button"
                >
                  {filter.name}
                </button>
              ))}
              <select
                onChange={this.toSelectByLength}
                value={selectedLength}
                className="goods__button"
              >
                {lengthsForSelection.map(goodLength => (
                  <option key={goodLength} value={goodLength}>
                    Length &ge; &nbsp;
                    {goodLength}
                  </option>
                ))}
              </select>
            </div>
            <GoodList list={visibleGoods} />
          </>
        )}
      </section>
    );
  }
}

export default App;
