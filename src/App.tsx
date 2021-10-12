import React from 'react';
import './App.css';
import GoodList from './components/GoodList/GoodList';

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
  isButtonClicked: boolean,
  goods: string[],
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    isButtonClicked: false,
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState({ isButtonClicked: true });
  };

  reverseGoods = () => {
    this.setState((currentState) => ({
      isReversed: !currentState.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isButtonClicked,
      goods,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = goods.slice();

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isButtonClicked && (
          <>
            <GoodList goods={visibleGoods} />
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
          </>
        )}
        {!isButtonClicked && (
          <button
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
