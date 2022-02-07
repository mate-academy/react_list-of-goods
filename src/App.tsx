import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList/GoodsList';

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
  goods: string[],
  showGoods: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    showGoods: false,
  };

  changeButtonState = () => {
    this.setState({
      showGoods: true,
    });
  };

  reverseGoods = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods].sort((a, b) => {
        return a.localeCompare(b);
      }),
    }));
  };

  sortByLength = () => {
    this.setState((prevState) => ({
      goods: [...prevState.goods].sort((a, b) => {
        return a.length - b.length;
      }),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.showGoods
          ? (
            <button
              type="button"
              onClick={this.changeButtonState}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <GoodsList goods={this.state.goods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
