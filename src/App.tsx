import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods';

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
  goods: string[];
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => {
    this.setState({ isVisible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ sortBy: '', isReversed: false });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      sortBy,
    } = this.state;
    const sortedGoods = [...goods];

    switch (sortBy) {
      case 'alphabet':
        sortedGoods.sort();
        break;
      case 'length':
        sortedGoods.sort((good1, good2) => good1.length - good2.length);
        break;
      default:
        break;
    }

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        <div className="App__content">
          <h1 className="App__title">List of Goods</h1>
          {!isVisible && (
            <button
              type="button"
              onClick={this.showList}
              className="App__button App__button--start"
            >
              Start
            </button>
          )}

          {isVisible && (
            <>
              <div className="App__buttons">
                <button
                  type="button"
                  onClick={this.reverseList}
                  className="App__button"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="App__button"
                >
                  By alphabet
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="App__button"
                >
                  By length
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="App__button"
                >
                  Reset
                </button>
              </div>

              <ListOfGoods goods={sortedGoods} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
