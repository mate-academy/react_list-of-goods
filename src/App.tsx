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
  isReverse: boolean,
  sortType: 'abc' | 'length' | 'none',
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReverse: false,
    sortType: 'none',
  };

  showHide = () => {
    this.setState((state) => ({ isVisible: !state.isVisible }));
  };

  reverse = () => {
    this.setState((state) => ({ isReverse: !state.isReverse }));
  };

  sortByABC = () => {
    this.setState({ sortType: 'abc' });
  };

  sortByLength = () => {
    this.setState({ sortType: 'length' });
  };

  clearSort = () => {
    this.setState({ sortType: 'none' });
  };

  render() {
    const {
      goods, isVisible, isReverse, sortType,
    } = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((el1, el2) => {
      switch (sortType) {
        case 'abc':
          return el1.localeCompare(el2);

        case 'length':
          return el1.length - el2.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        {isVisible
          ? (
            <>
              <button
                type="button"
                onClick={this.showHide}
              >
                Hide list
              </button>

              <ul className="list">
                {goodsCopy.map(item => (
                  <li
                    className="item"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="sort">
                Sort by:
                <button
                  type="button"
                  onClick={this.sortByABC}
                >
                  alphabetical order
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                >
                  name length
                </button>

                <button
                  type="button"
                  onClick={this.clearSort}
                >
                  none
                </button>
              </div>

              <button
                type="button"
                onClick={this.reverse}
              >
                reverse
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={this.showHide}
            >
              Show list
            </button>
          )}
      </div>
    );
  }
}

export default App;
