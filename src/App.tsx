// import { type } from 'os';
import React from 'react';
import './App.scss';

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
  isVisible: boolean,
  goods: string[],
  isReversed: boolean,
  sortBy: 'alphabet' | 'length' | null,
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
    goods: goodsFromServer,
    isReversed: false,
    sortBy: null,
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortByAlph = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      sortBy: null,
    });
  };

  render() {
    const {
      isVisible,
      goods,
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
        <h1>React list of goods</h1>
        {!isVisible && (
          <button
            className='button'
            type="button"
            onClick={() => {
              this.setState({ isVisible: !isVisible });
            }}
          >
            Start
          </button>
        )}
        { isVisible && (
          <>
            <button
              className='button'
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className='button'
              type="button"
              onClick={this.sortByAlph}
            >
              Sort by alphabet
            </button>
            <button
              className='button'
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className='button'
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <ul className="list">
              {visibleGoods.map(item => (
                <li
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>

          </>
        )}
      </div>
    );
  }
}

export default App;
