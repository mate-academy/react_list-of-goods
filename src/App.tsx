import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStarted: false,
  };

  start = () => {
    this.setState((prevState) => ({
      isStarted: !prevState.isStarted,
    }));
  };

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  setSortByAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => {
        return a.localeCompare(b);
      }),
    }));
  };

  setSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => {
        return a.length - b.length;
      }),
    }));
  };

  resetGoodsList = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { isStarted, goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          isStarted && (
            <>
              <GoodsList goods={goods} />

              <div className="App__wrap-btns">
                <button
                  type="button"
                  className="App__btn"
                  onClick={this.reverseGoods}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="App__btn"
                  onClick={this.setSortByAlphabetically}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="App__btn"
                  onClick={this.setSortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="App__btn App__btn--color--red"
                  onClick={this.resetGoodsList}
                >
                  Reset
                </button>
              </div>
            </>
          )
        }
        {!isStarted && (
          <button
            type="button"
            className="App__btn"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
