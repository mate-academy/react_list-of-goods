import React from 'react';
import { List } from './components/List';
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
  goods: string[],
  visible: boolean,
  sortBy: string,
  revers: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    visible: false,
    sortBy: '',
    revers: false,
  };

  start = () => {
    this.setState({
      visible: true,
    });
  };

  reverseGoods = () => {
    this.setState(state => ({
      revers: !state.revers,
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
      revers: false,
    });
  };

  preperGoods = () => {
    const { goods, sortBy, revers } = this.state;
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

    if (revers) {
      copyListOfGoods.reverse();
    }

    return copyListOfGoods;
  };

  render() {
    const { visible } = this.state;
    const preperedGoods = this.preperGoods();

    return (
      <div className="App">
        {!visible && (
          <button
            className="start__button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {visible && (
          <>
            <div className="buttons">
              <button
                className="button"
                type="button"
                onClick={this.reverseGoods}
              >
                Reverse
              </button>

              <button
                className="button"
                type="button"
                onClick={this.sortAbc}
              >
                Sort alphabetically
              </button>

              <button
                className="button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
            <List goodsList={preperedGoods} />

          </>

        )}
      </div>
    );
  }
}
export default App;
