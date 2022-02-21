import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList/GoodList';

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
  isReverse: boolean,
  sortBy: string;
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isReverse: false,
    sortBy: '',
    isVisible: false,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
    });
  };

  sortByAlpha = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const {
      isReverse,
      sortBy,
      isVisible,
    } = this.state;
    const goods = [...goodsFromServer];

    goods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        <div className="buttons__container">
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
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByAlpha}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>

        {isVisible ? (
          <GoodList goods={goods} />
        ) : (
          <div className="button__container">
            <button
              type="button"
              className="button-start"
              onClick={this.start}
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
