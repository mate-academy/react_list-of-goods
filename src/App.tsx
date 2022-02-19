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
    const buttonClass = 'button is-primary';

    switch (sortBy) {
      case 'alphabet':
        goods.sort((g1, g2) => g1.localeCompare(g2));
        break;

      case 'length':
        goods.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
        break;
    }

    if (isReverse) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        <div className="buttons__container">
          <button
            type="button"
            className={this.state.isReverse
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            className={this.state.sortBy
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
            onClick={this.sortByAlpha}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={this.state.sortBy
              ? `${buttonClass} is-active`
              : `${buttonClass}`}
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
