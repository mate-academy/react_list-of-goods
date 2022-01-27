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

export enum SortBy {
  Default = '',
  Name = 'name',
  Length = 'length',
}

type State = {
  started: boolean,
  goods: string[],
  sortBy: SortBy,
  reverse: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    started: false,
    goods: [...goodsFromServer],
    sortBy: SortBy.Default,
    reverse: false,
  };

  sortByName = () => {
    this.setState({
      sortBy: SortBy.Name,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortBy.Length,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer], sortBy: SortBy.Default });
  };

  getSortedGoods = () => {
    return [...this.state.goods].sort((g1, g2) => {
      switch (this.state.sortBy) {
        case 'name':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });
  };

  render() {
    const { reverse } = this.state;

    const sortedGoods = this.getSortedGoods();

    if (reverse) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        {this.state.started
          ? (
            <div className="content">
              <h1 className="has-text-centered">Goods</h1>
              <ul>
                {sortedGoods.map(good => (
                  <li>{good}</li>
                ))}
              </ul>
              <div className="buttons has-addons is-centered">
                <button
                  type="button"
                  className="button is-rounded is-outlined is-info"
                  onClick={this.sortByName}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-rounded is-outlined is-info"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
              </div>
              <div className="buttons has-addons is-centered">
                <button
                  type="button"
                  className="button is-rounded is-outlined is-info"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-rounded is-outlined is-info"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </div>
          )
          : (
            <button
              type="button"
              className="button is-rounded is-outlined is-info start"
              onClick={() => this.setState({ started: true })}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
