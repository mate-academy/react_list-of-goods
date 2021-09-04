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

interface State {
  listofGoods: string[],
  started: boolean,
  sortBy : string,
  isReversed: boolean,
  reset: boolean,
}

class App extends React.Component<{}, State> {
  state = {
    listofGoods: goodsFromServer,
    started: false,
    sortBy: '',
    isReversed: false,
    reset: false,
  };

  reverse = () => {
    this.setState(prev => ({
      listofGoods: [...prev.listofGoods].reverse(),
    }));
  };

  sort = () => {
    this.setState(prev => {
      const newList = [...prev.listofGoods].sort((a, b) => {
        switch (this.state.sortBy) {
          case 'name':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });

      return { listofGoods: newList };
    });
  };

  render() {
    let newList = [...this.state.listofGoods].sort((a, b) => {
      switch (this.state.sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed === true) {
      newList.reverse();
    }

    if (this.state.reset === true) {
      newList = goodsFromServer;
    }

    return (
      this.state.started
        ? (
          <div className="App">
            <h1 className="goods">
              List of goods:
            </h1>
            <ul className="list">
              {newList.map(el => {
                return (
                  <>
                    <li className="list__item">
                      {el}
                    </li>
                    <br />
                  </>
                );
              })}
            </ul>
            <div className="buttons">
              <button
                className="button button--reset"
                type="button"
                value="button"
                onClick={() => {
                  this.setState((prev) => ({
                    reset: false,
                    isReversed: !prev.isReversed,
                  }));
                }}
              >
                Reverse
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={() => {
                  this.setState({
                    sortBy: 'name',
                    reset: false,
                  });
                }}
              >
                Sort alphabetically
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={() => {
                  this.setState({
                    sortBy: 'length',
                    reset: false,
                  });
                }}
              >
                Sort by length
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={() => {
                  this.setState({
                    sortBy: '',
                    reset: true,
                    isReversed: false,
                  });
                }}
              >
                Reset
              </button>
            </div>
          </div>
        )
        : (
          <button
            className="button button--start"
            type="button"
            value="button"
            onClick={() => {
              this.setState({
                started: true,
              });
            }}
          >
            Click to start
          </button>
        )
    );
  }
}

export default App;
