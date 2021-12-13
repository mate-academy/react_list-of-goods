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
  isVisible: boolean,
  visibleGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    visibleGoods: [...goodsFromServer],
  };

  hideStartButton = () => {
    this.setState({ isVisible: true });
  };

  reverseGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }));
  };

  sortGoodsAlplabetically = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].sort((good1, good2) => {
        return good1.localeCompare(good2);
      }),
    }));
  };

  sortGoodsByLength = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].sort((good1, good2) => {
        return good1.length - good2.length;
      }),
    }));
  };

  resetGoodsToInitialState = () => {
    this.setState({ visibleGoods: [...goodsFromServer] });
  };

  render() {
    const { isVisible, visibleGoods } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">Goods</h1>
          <button
            type="button"
            onClick={this.hideStartButton}
            className={isVisible
              ? 'App__start-button--hidden'
              : 'App__start-button'}
          >
            Start
          </button>
          <br />
          <button
            type="button"
            className="App__reverse-button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>
          <button
            type="button"
            className="App__sortalph-button"
            onClick={this.sortGoodsAlplabetically}
          >
            Sort Alphabetically
          </button>
          <button
            type="button"
            className="App__sortlength-button"
            onClick={this.sortGoodsByLength}
          >
            Sort By Length
          </button>
          <button
            type="button"
            className="App__reset-button"
            onClick={this.resetGoodsToInitialState}
          >
            Reset
          </button>
          <ul className={isVisible ? 'App__list' : 'App__list App__list--hidden'}>
            {visibleGoods.map((good) => {
              return (
                <li key={good}>
                  {good}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
