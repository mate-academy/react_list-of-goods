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
  isGoodsVisible: boolean;
  goods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    isGoodsVisible: false,
    goods: [...goodsFromServer],
  };

  showList = () => {
    this.setState((state) => ({
      isGoodsVisible: !state.isGoodsVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAbc = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((pr1, pr2) => pr1.length - pr2.length),
    }));
  };

  render() {
    const {
      isGoodsVisible,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1
          className="
          title
          App__header"
        >
          Goods
        </h1>

        <button
          type="button"
          onClick={this.showList}
          className="
          button
          is-info
          is-light
          App__button"
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
          className="
          button
          is-info
          is-light
          App__button
          "
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAbc}
          className="
          button
          is-info
          is-light
          App__button"
        >
          Sort alphavetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
          className="
          button
          is-info
          is-light
          App__button"
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
          className="
          button
          is-info
          is-light
          App__button"
        >
          Reset
        </button>

        {isGoodsVisible && (
          <ul className="App__list">
            {goods.map(good => (
              <li
                key={good}
                className="App__item has-text-weight-light"
              >
                {good}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
