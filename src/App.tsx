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
    this.setState((prev) => ({
      reset: false,
      isReversed: !prev.isReversed,
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

  start = () => {
    this.setState({
      started: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      reset: false,
    });
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'name',
      reset: false,
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      reset: true,
      isReversed: false,
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
              {newList.map((el, index) => {
                return (
                  <>
                    <li
                      className="list__item"
                      key={index}
                    >
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
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="button button--sort"
                type="button"
                value="button"
                onClick={this.reset}
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
            onClick={this.start}
          >
            Click to start
          </button>
        )
    );
  }
}

export default App;
