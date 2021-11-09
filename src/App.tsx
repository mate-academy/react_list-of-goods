import React from 'react';
import GoodsList from './components/goodslist';
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
  started: boolean,
  goods: string[],
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    started: false,
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState({ started: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods,
      started,
      sortBy,
      isReversed,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!started && (
          <button
            type="button"
            className="start-button"
            onClick={this.showGoods}
          >
            Started
          </button>
        )}
        {started && (
          <>
            <h2>Goods List</h2>
            <GoodsList goods={visibleGoods} />
            <div className="conteiner">
              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortByAlphabet}
              >
                Sort by alphabet
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
