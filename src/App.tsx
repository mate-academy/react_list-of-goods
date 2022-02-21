import React from 'react';
import { List } from './Components/List';

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
  isVisible: boolean,
  sortBy: string,
  isReversed: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    sortBy: '',
    isReversed: false,
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAbc = () => {
    this.setState({
      sortBy: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  prepareGoods = () => {
    const { goods, sortBy, isReversed } = this.state;
    const copyListOfGoods = [...goods];

    copyListOfGoods.sort((firstGood, secondGood) => {
      switch (sortBy) {
        case 'abc':
          return firstGood.localeCompare(secondGood);
        case 'length':
          return firstGood.length - secondGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyListOfGoods.reverse();
    }

    return copyListOfGoods;
  };

  render() {
    const { isVisible } = this.state;
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <div>
              <button
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortAbc}
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
            </div>
            <List goodsList={preparedGoods} />

          </>

        )}
      </div>
    );
  }
}
export default App;
