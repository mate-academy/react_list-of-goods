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

type State = {
  isVisible: boolean;
  goodsList: string[];
  lengthGoods: number;
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    goodsList: [...goodsFromServer],
    lengthGoods: 1,
  };

  toggleGoodsVisibility(visible: boolean) {
    if (visible !== this.state.isVisible) {
      this.setState({
        isVisible: visible,
      });
    }
  }

  reverse() {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList.reverse()],
    }));
  }

  sort() {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList.sort((a, b) => a.localeCompare(b))],
    }));
  }

  reset() {
    this.setState({
      goodsList: [...goodsFromServer],
      lengthGoods: 1,
    });
  }

  sortLength() {
    this.setState(prevState => ({
      goodsList: [...prevState.goodsList.sort((a, b) => a.length - b.length)],
    }));
  }

  selectChange(event: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      lengthGoods: Number(event.target.value),
    });
  }

  render() {
    const { isVisible, goodsList, lengthGoods } = this.state;
    const lengthList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <div className="App__goods goods">
          {!isVisible && (
            <button
              type="button"
              onClick={() => this.toggleGoodsVisibility(true)}
              className="goods__startButton"
            >
              Start
            </button>
          )}
          {isVisible && (
            <ul className="goods__list">
              {goodsList.map((item) => {
                return item.length >= lengthGoods && (
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
            className="App__button"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={() => this.sort()}
            className="App__button"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={() => this.reset()}
            className="App__button"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => this.sortLength()}
            className="App__button"
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
