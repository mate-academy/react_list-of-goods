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
  visibleOfGood: boolean,
  reversedGoods: boolean,
  sortBy: string,

}

class App extends React.Component<{}, State> {
  state = {
    visibleOfGood: false,
    reversedGoods: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState({
      visibleOfGood: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversedGoods: !state.reversedGoods,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'Alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'Length',
    });
  };

  reset = () => {
    this.setState({
      visibleOfGood: false,
      reversedGoods: false,
      sortBy: '',
    });
  };

  render() {
    const {
      visibleOfGood,
      reversedGoods,
      sortBy,
    } = this.state;

    const copyGoods = [...goodsFromServer];

    if (sortBy) {
      copyGoods.sort((a, b) => {
        switch (sortBy) {
          case 'Length':
            return a.length - b.length;
          case 'Alphabet':
            return a.localeCompare(b);
          default:
            return 0;
        }
      });
    }

    if (reversedGoods) {
      copyGoods.reverse();
    }

    return (
      <>
        {visibleOfGood
          ? (
            <>
              <ul>
                {copyGoods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortByAlphabet}>Sort alphabetically</button>
              <button type="button" onClick={this.sortByLength}>Sort by length</button>
              <button type="button" onClick={this.reset}>Reset</button>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )}
      </>
    );
  }
}

export default App;
