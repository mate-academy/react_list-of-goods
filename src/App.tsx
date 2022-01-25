import React from 'react';
import './App.css';

export const goodsFromServer: string[] = [
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
  isSortedBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSortedBy: '',
  };

  start = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      isSortedBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      isSortedBy: 'length',
    });
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        isSortedBy: '',
      },
    );
  };

  prepareGoods = () => {
    const { goods, isSortedBy, isReversed } = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((good1, good2) => {
      switch (isSortedBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return goodsCopy;
  };

  render() {
    const { isVisible } = this.state;
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            className="ui inverted green button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {isVisible && (
          <>
            <ul className="list">
              {preparedGoods.map(good => (
                <li
                  key={good}
                  className="list__item"
                >
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="ui primary basic button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="ui secondary basic button"
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="ui positive basic button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="ui negative basic button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
