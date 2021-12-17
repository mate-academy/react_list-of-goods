import React, { ChangeEvent } from 'react';
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

const lengthList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type State = {
  isVisible: boolean;
  lengthGoods: number;
  filterGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    lengthGoods: 1,
    filterGoods: [...goodsFromServer],
  };

  toggleGoodsVisibility() {
    this.setState({
      isVisible: true,
    });
  }

  reverse() {
    this.setState(prevState => ({
      filterGoods: [...prevState.filterGoods.reverse()],
    }));
  }

  sortAlphabetically() {
    this.setState(prevState => ({
      filterGoods: [...prevState.filterGoods.sort((a, b) => a.localeCompare(b))],
    }));
  }

  sortLength() {
    this.setState(prevState => ({
      filterGoods: [...prevState.filterGoods.sort((a, b) => a.length - b.length)],
    }));
  }

  reset() {
    this.setState({
      filterGoods: [...goodsFromServer],
      lengthGoods: 1,
    });
  }

  selectChange(event: ChangeEvent<HTMLSelectElement>) {
    this.setState(() => {
      const length = Number(event.target.value);

      return {
        lengthGoods: length,
        filterGoods: [...goodsFromServer.filter(item => item.length >= length)],
      };
    });
  }

  render() {
    const { isVisible, filterGoods, lengthGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <div className="App__goods goods">
          {!isVisible && (
            <button
              type="button"
              onClick={() => this.toggleGoodsVisibility()}
              className="goods__startButton"
            >
              Start
            </button>
          )}
          {isVisible && (
            <ul className="goods__list">
              {filterGoods.map((item) => {
                return (
                  <li key={item} className="goods__item">
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="App__buttons">
          <button
            type="button"
            onClick={() => this.reverse()}
            className={`App__button--disabled ${isVisible && 'App__button'}`}
            disabled={!isVisible}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={() => this.sortAlphabetically()}
            className={`App__button--disabled ${isVisible && 'App__button'}`}
            disabled={!isVisible}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={() => this.reset()}
            className={`App__button--disabled ${isVisible && 'App__button'}`}
            disabled={!isVisible}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => this.sortLength()}
            className={`App__button--disabled ${isVisible && 'App__button'}`}
            disabled={!isVisible}
          >
            Sort by length
          </button>
        </div>
        <span className="App__selectTitle">Select a length of goods</span>
        <select value={lengthGoods} onChange={(event) => this.selectChange(event)}>
          {lengthList.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default App;
