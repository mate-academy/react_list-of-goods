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

interface State {
  goods: string[],
  isStarted: boolean,
  isReverse: boolean,
  isAlphabetically: boolean,
  isSortByLength: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReverse: false,
    isAlphabetically: false,
    isSortByLength: false,
  };

  started = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverseGoodsList = () => {
    this.setState(prevState => ({
      isReverse: !prevState.isReverse,
      isAlphabetically: false,
      isSortByLength: false,
    }));
  };

  alphabeticallySortGoodsList = () => {
    this.setState(prevState => ({
      isReverse: false,
      isAlphabetically: !prevState.isAlphabetically,
      isSortByLength: false,
    }));
  };

  defaultGoodsList = () => {
    this.setState({
      isReverse: false,
      isAlphabetically: false,
      isSortByLength: false,
    });
  };

  goodsListSortedBylength = () => {
    this.setState(prevState => ({
      isReverse: false,
      isAlphabetically: false,
      isSortByLength: !prevState.isSortByLength,
    }));
  };

  getGoodsList = () => {
    if (this.state.isReverse) {
      return [...this.state.goods].reverse();
    }

    if (this.state.isAlphabetically) {
      return [...this.state.goods].sort((goodOne, goodTwo) => (
        goodOne.localeCompare(goodTwo)
      ));
    }

    if (this.state.isSortByLength) {
      return [...this.state.goods].sort((goodOne, goodTwo) => (
        goodOne.length - goodTwo.length
      ));
    }

    return this.state.goods;
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          isStarted && (
            <div className="App__wrap">
              <ul className="App__list">
                {this.getGoodsList().map(good => {
                  return (
                    <li key={good} className="App__item">
                      {good}
                    </li>
                  );
                })}
              </ul>

              <div className="App__wrap-btns">
                <button
                  type="button"
                  className="App__btn"
                  onClick={this.reverseGoodsList}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="App__btn"
                  onClick={this.alphabeticallySortGoodsList}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="App__btn"
                  onClick={this.defaultGoodsList}
                >
                  Reset
                </button>

                <button
                  type="button"
                  className="App__btn"
                  onClick={this.goodsListSortedBylength}
                >
                  Sort by length
                </button>
              </div>
            </div>
          )
        }
        {!isStarted && (
          <button
            type="button"
            className="App__btn"
            onClick={this.started}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
