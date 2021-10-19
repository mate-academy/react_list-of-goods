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

type State = {
  initialGoods: string[],
  isListVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    initialGoods: [...goodsFromServer],
    isListVisible: true,
    isReversed: false,
    sortBy: '',
  };

  makeVisible = () => {
    this.setState((state) => ({
      isListVisible: !state.isListVisible,
    }));
  };

  makeReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState(() => ({
      sortBy: 'alphabet',
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortBy: 'length',
    }));
  };

  reset = () => {
    this.setState({
      initialGoods: [...goodsFromServer],
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      initialGoods,
      isListVisible,
      isReversed,
      sortBy,
    } = this.state;

    const visiableList = [...initialGoods];

    visiableList.sort((good1, good2) => {
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
      visiableList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isListVisible
          ? (
            <button
              type="button"
              onClick={this.makeVisible}
            >
              Start
            </button>
          )
          : (
            <>
              <ul>
                {visiableList.map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={this.makeReverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Alphabet
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Length
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )}
      </div>
    );
  }
}

export default App;
