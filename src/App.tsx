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

type Props = {};

type State = {
  goods: string[],
  isVisible: boolean,
  length: number,
};

export class App extends React.Component<Props, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    length: 1,
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  reversList = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  alphabetSort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((i1, i2) => i1.localeCompare(i2)),
    }));
  };

  resetState = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      length: 1,
    }));
  };

  lengthSort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((i1, i2) => i1.length - i2.length),
    }));
  };

  changeLen = (event: { target: { value: string; name: string; } }): void => {
    const { value } = event.target;

    this.setState(() => ({
      length: +value,
    }));
  };

  render() {
    const { isVisible, goods, length } = this.state;
    const visible = goods.filter(good => good.length >= length);

    return isVisible
      ? (
        <div className="app">
          <h1>Goods</h1>
          <ul className="app__list">
            {visible.map(good => (

              <li key={good} className="app__item">
                {good}
              </li>

            ))}
          </ul>

          <div className="app__buttonBox">
            <button
              type="button"
              className="app__button"
              onClick={this.reversList}
            >
              Revers
            </button>

            <button
              type="button"
              className="app__button"
              onClick={this.alphabetSort}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="app__button"
              onClick={this.lengthSort}
            >
              Sort by length
            </button>
            <form method="GET">
              <span className="app__form">min length</span>
              <select value={length} onChange={this.changeLen}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </form>

            <button
              type="button"
              className="app__button"
              onClick={this.resetState}
            >
              Reset
            </button>
          </div>
        </div>
      )
      : (
        <button
          className="app__showBut"
          type="button"
          onClick={this.showGoods}
        >
          START
        </button>
      );
  }
}

// export default App;
