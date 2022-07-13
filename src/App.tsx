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
  goods: string[],
  buttonIsVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: [...goodsFromServer],
    buttonIsVisible: true,
  };

  changeVisibility = () => {
    this.setState(state => ({
      buttonIsVisible: !state.buttonIsVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      }),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => {
        return good1.length - good2.length;
      }),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        {this.state.buttonIsVisible === true
          ? (
            <button
              type="button"
              onClick={this.changeVisibility}
            >
              Start
            </button>

          ) : (
            <>
              <ul>
                {this.state.goods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ul>

              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </>
          )}
      </div>
    );
  }
}

export default App;
