import React from 'react';
import './App.css';
import { ListGoods } from './ListGoods';

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
  buttonStatus: boolean,
  isReversed: boolean,
  sortBy: string,
  goods: string[],
  lengthLimit: number,
}

enum SortTypes {
  Alphabetically = 'Alphabetically',
  Length = 'Length',
  Default = 'Default',
}

class App extends React.Component<{}, State> {
  state: State = {
    buttonStatus: true,
    isReversed: false,
    sortBy: SortTypes.Default,
    goods: goodsFromServer,
    lengthLimit: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlph = () => {
    this.setState({ sortBy: SortTypes.Alphabetically });
  };

  sortLength = () => {
    this.setState({ sortBy: SortTypes.Length });
  };

  reset = () => {
    this.setState({ sortBy: SortTypes.Default });
  };

  limit = (event: any) => {
    this.setState({ lengthLimit: event.target.value });
  };

  render() {
    const {
      buttonStatus,
      isReversed,
      sortBy,
      lengthLimit,
      goods,
    } = this.state;
    const gooodsList = [...goods].sort((g1, g2) => {
      switch (sortBy) {
        case SortTypes.Alphabetically:
          return g1.localeCompare(g2);

        case SortTypes.Length:
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      gooodsList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {buttonStatus === true
          && (
            <button
              className="button start"
              type="button"
              id="start"
              onClick={() => {
                this.setState({ buttonStatus: false });
              }}
            >
              Start
            </button>
          )}
        {!buttonStatus
          && (
            <>
              <button
                type="button"
                className="button reverse"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button sort_alph"
                onClick={this.sortAlph}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button sort_length"
                onClick={this.sortLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.reset}
              >
                Reset
              </button>
              <input
                className="input_length"
                id="input_length"
                type="number"
                value={this.state.lengthLimit}
                min="1"
                max="10"
                onChange={this.limit}
              />
            </>
          )}
        {
          (!buttonStatus)
          && <ListGoods goods={gooodsList.filter(good => good.length >= lengthLimit)} />
        }
      </div>
    );
  }
}

export default App;
