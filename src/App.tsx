import React from 'react';
// import { render } from 'react-dom';
import { GoodsList } from './Components/GoodsList/GoodsList';
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
  sortBy: string,
  isReversed: boolean,
  start: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    sortBy: 'default',
    isReversed: false,
    start: false,
  };

  render() {
    const {
      goods,
      start,
      sortBy,
      isReversed,
    } = this.state;

    const isStarted = () => (
      this.setState({ start: true })
    );

    const reverse = () => (
      this.setState(state => (
        { isReversed: !state.isReversed }
      ))
    );

    const sortAlphabet = () => (
      this.setState({ sortBy: 'alphabet' })
    );

    const sortLength = () => (
      this.setState({ sortBy: 'length' })
    );

    const resetSort = () => (
      this.setState({
        goods: [...goodsFromServer],
        sortBy: 'default',
      })
    );

    goods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="app">
        {!start
          ? (
            <button
              type="button"
              className="app__start"
              onClick={isStarted}
            >
              Start
            </button>
          )
          : (
            <>
              <div className="app__buttons">
                <button
                  type="button"
                  onClick={reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={sortAlphabet}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={sortLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  onClick={resetSort}
                >
                  Reset
                </button>
              </div>
              <GoodsList goodsArray={goods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
