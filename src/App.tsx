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
      isReversed: true,
      sortBy: '',
    });
  };

  render() {
    const {
      initialGoods, isListVisible, isReversed, sortBy,
    } = this.state;

    const visiableGoods = [...initialGoods];

    visiableGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (!isReversed) {
      visiableGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {isListVisible
          ? (
            <button
              type="button"
              className="App__button"
              onClick={this.makeVisible}
            >
              Start
            </button>
          )
          : (
            <>
              <ul className="App__list">
                {visiableGoods.map(good => (
                  <li className="App__good" key={good}>
                    {good}
                  </li>
                ))}
              </ul>

              <div className="Buttons">
                <button
                  type="button"
                  className="Buttons__button"
                  onClick={this.makeReverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="Buttons__button"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="Buttons__button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="Buttons__button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </>
          )}
      </div>
    );
  }
}

export default App;
