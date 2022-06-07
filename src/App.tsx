/* eslint-disable react/no-unused-state */
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
  listVisible: boolean,
  isRversed: boolean,
  sortBy: string,
  reset: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    listVisible: false,
    isRversed: false,
    sortBy: '',
    reset: false,
  };

  reverse = () => {
    this.setState(state => ({
      isRversed: !state.isRversed,
    }));
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  };

  reset = () => {
    this.setState(state => ({
      reset: !state.reset,
    }));
  };

  findIndexOfName = (currentName: string): number => (
    goodsFromServer.findIndex(name => name === currentName)
  );

  render() {
    const {
      listVisible, isRversed, sortBy, reset,
    } = this.state;
    let visibleGoods = [...goodsFromServer];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;
        case 'name':
          return a.localeCompare(b);
        default:
          return 0;
      }
    });

    if (isRversed) {
      visibleGoods.reverse();
      this.state.isRversed = false;
    }

    if (reset) {
      visibleGoods = [...goodsFromServer];
      this.state.reset = false;
    }

    return (
      <div className="conteiner">
        <div className="app">
          {!listVisible && (
            <button
              className="button is-danger is-large"
              type="button"
              onClick={() => this.setState({ listVisible: !listVisible })}
            >
              Start
            </button>
          )}

          {listVisible && (
            <div className="app__listConteiner">
              <h1 className="app__title">Goods:</h1>

              <ul
                className="app__list"
              >
                {visibleGoods.map(good => (
                  <li
                    className="app__list-item"
                    key={good}
                  >
                    {`${this.findIndexOfName(good) + 1} - ${good}`}
                  </li>
                ))}
              </ul>

              <button
                className="button is-primary"
                type="button"
                onClick={() => {
                  this.reverse();
                }}
              >
                Reverse
              </button>
              <button
                className="button is-primary"
                type="button"
                onClick={() => {
                  this.sortByName();
                }}
              >
                Sort alphabetically
              </button>
              <button
                className="button is-primary"
                type="button"
                onClick={() => {
                  this.sortByLength();
                }}
              >
                Sort by length
              </button>

              <button
                className="button is-warning"
                type="button"
                onClick={() => {
                  this.reset();
                }}
              >
                Reset
              </button>
              {listVisible && (
                <button
                  className="button is-danger"
                  type="button"
                  onClick={() => this.setState({ listVisible: !listVisible })}
                >
                  Hide list
                </button>
              )}
            </div>
          )}
        </div>
      </div>

    );
  }
}

export default App;
