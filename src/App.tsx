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

interface State {
  goodsCopy: string[],
  showList: boolean,
  reverse: number,
  sortBy: string,
}

class App extends React.Component <{}, State> {
  state = {
    goodsCopy: [...goodsFromServer],
    showList: false,
    reverse: 0,
    sortBy: 'none',
  };

  startShowList = () => {
    this.setState({ showList: true });
  };

  reverseList = () => {
    this.setState((state) => ({
      reverse: state.reverse + 1,
    }));
  };

  sortByA_Z = () => {
    this.setState({ sortBy: 'a-z' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: 'none',
      reverse: 0,
      goodsCopy: [...goodsFromServer],
    });
  };

  render() {
    const {
      goodsCopy, showList, reverse, sortBy,
    } = this.state;

    goodsCopy.sort((item1: string, item2: string): number => {
      switch (sortBy) {
        case 'a-z':
          return item1.localeCompare(item2);
        case 'length':
          return item1.length - item2.length;
        default:
          return 0;
      }
    });

    if (reverse % 2 !== 0) {
      goodsCopy.reverse();
    }

    return (
      <>
        <div className="App">
          <h1>Goods</h1>

          <button
            type="button"
            className={
              reverse % 2 === 0
                ? 'App__button'
                : 'App__button App__button--pressed'
            }
            onClick={() => this.reverseList()}
          >
            Reverse
          </button>

          <button
            type="button"
            className={
              this.state.sortBy !== 'a-z'
                ? 'App__button'
                : 'App__button App__button--pressed'
            }
            onClick={() => this.sortByA_Z()}
          >
            Sort A-Z
          </button>

          <button
            type="button"
            className={
              this.state.sortBy !== 'length'
                ? 'App__button'
                : 'App__button App__button--pressed'
            }
            onClick={() => this.sortByLength()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="App__button"
            onClick={() => this.reset()}
          >
            Reset
          </button>

          { !showList
            ? (
              <button
                type="button"
                className="App__button"
                onClick={() => this.startShowList()}
              >
                Start
              </button>
            )
            : (
              <ul>
                {goodsCopy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) }
        </div>
      </>
    );
  }
}

export default App;
