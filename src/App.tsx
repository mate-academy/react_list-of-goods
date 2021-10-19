import React from 'react';
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

  makeVisible = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
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
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goods];

    if (sortBy) {
      visibleGoods.sort((item1, item2) => {
        switch (sortBy) {
          case 'alphabet':
            return item1.localeCompare(item2);
          case 'length':
            return item1.length - item2.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.makeVisible}
          >
            Start
          </button>
        )}

        {isVisible && (
          <>
            <ul className="list">
              {visibleGoods.map(item => (
                <li
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              className="title__button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
