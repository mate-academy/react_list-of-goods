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
  goods: string[],
  isRendered: boolean,
  isReversed: boolean,
  sortBy: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isRendered: false,
    isReversed: false,
    sortBy: '',
  };

  startRender = () => {
    this.setState({
      isRendered: true,
    });
  };

  sortByAlphabetical = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetAll = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      sortBy: '',
    });
  };

  getAllMethods = () => {
    const {
      goods,
      isReversed,
      sortBy,
    } = this.state;
    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoods.reverse();
    }

    return copyGoods;
  };

  render() {
    const { isRendered } = this.state;
    const copyGoods = this.getAllMethods();

    return (
      <div className="App">
        { isRendered
          ? (
            <>
              <h1>visible side</h1>
              <button type="button" onClick={this.sortByAlphabetical}>
                Sort by Alphabet
              </button>
              <button type="button" onClick={this.sortByLength}>
                Sort by Length
              </button>
              <button type="button" onClick={this.reverseGoods}>
                Reverse
              </button>
              <button type="button" onClick={this.resetAll}>
                Reset
              </button>
              <ul>
                {copyGoods.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )
          : (
            <button type="button" onClick={this.startRender}>
              Start
            </button>
          )}
      </div>
    );
  }
}
