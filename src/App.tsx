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

type State = {
  startList: string[],
  goods: string[],
  showList: boolean,
};
class App extends React.Component<{}, State> {
  state = {
    startList: goodsFromServer,
    goods: goodsFromServer,
    showList: false,
  };

  openList = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  };

  isReverse = () => {
    this.setState(state => {
      const newList = [...state.goods];

      return {
        goods: newList.reverse(),
      };
    });
  };

  isSortedByAlph = () => {
    this.setState(state => {
      const newList = [...state.goods];

      return {
        goods: newList.sort(),
      };
    });
  };

  isReset = () => {
    const { startList } = this.state;

    this.setState({ goods: startList });
  };

  isSortedByLength = () => {
    this.setState(state => {
      const newList = [...state.goods];

      return {
        goods: newList.sort((fruit1, fruit2) => fruit1.length - fruit2.length),
      };
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="app">
        <div className="app__buttons">
          {this.state.showList === false && (
            <button
              className="button is-primary is-light"
              type="button"
              onClick={this.openList}
            >
              Start
            </button>
          )}
          <button
            className="button is-warning is-light"
            type="button"
            onClick={this.isReverse}
          >
            Reverse
          </button>
          <button
            className="button is-warning is-light"
            type="button"
            onClick={this.isSortedByAlph}
          >
            Sort alphabetically
          </button>
          <button
            className="button is-warning is-light"
            type="button"
            onClick={this.isSortedByLength}
          >
            Sort by length
          </button>
          <button
            className="button is-danger is-light"
            type="button"
            onClick={this.isReset}
          >
            Reset
          </button>
        </div>
        <h1 className="app__title">Goods</h1>
        <ul className="app__list">
          {this.state.showList
          && goods.map(good => (
            <li className="app__item" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
