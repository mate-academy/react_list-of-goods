import React from 'react';
import { GoodsList } from './components/GoodsList';
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
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  show = () => {
    this.setState({
      isVisible: true,
    });
  };

  cancel = () => {
    this.setState({
      isVisible: false,
      isReversed: false,
      sortBy: '',
    });
  };

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sorting = () => {
    this.setState({
      sortBy: '',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  sortAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const {
      goods, isVisible, isReversed, sortBy,
    } = this.state;
    const visibleGoods = [...goods];

    switch (sortBy) {
      case 'length':
        visibleGoods.sort((el1, el2) => el1.length - el2.length);
        break;

      case 'alphabet':
        visibleGoods.sort((el1, el2) => el1.localeCompare(el2));
        break;

      default:
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <div className="App__list">
          <h1>List of Goods</h1>
          {isVisible && <GoodsList goodsList={visibleGoods} />}
        </div>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.show}
          >
            Start
          </button>
          {isVisible && (
            <div className="App__buttons-close">
              <button
                type="button"
                onClick={this.cancel}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={this.reversed}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortLength}
              >
                Sort by length
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
