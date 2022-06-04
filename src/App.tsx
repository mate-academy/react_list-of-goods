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
  goods: string[];
  clickStart: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    clickStart: false,
  };

  getReset() {
    this.setState({ goods: goodsFromServer });
  }

  getReverse() {
    this.setState((prevState) => (
      { goods: [...prevState.goods].reverse() }
    ));
  }

  SortBylength() {
    this.setState((prevState) => (
      {
        goods:
        [...prevState.goods].sort((a, b) => a.length - b.length),
      }
    ));
  }

  sortAlphabetically() {
    this.setState((prevState) => (
      {
        goods:
        [...prevState.goods].sort((a, b) => a.localeCompare(b)),
      }
    ));
  }

  startFinishButton() {
    this.setState((prevState) => ({ clickStart: !prevState.clickStart }));
  }

  render() {
    const { clickStart } = this.state;
    const { goods } = this.state;

    return (
      <div className="m-5 level-item has-text-centered">
        <button
          type="button"
          className="button is-warning is-outlined"
          onClick={() => this.startFinishButton()}
        >
          {!clickStart
            ? 'Start'
            : 'Finish'}
        </button>
        {clickStart
          && (
            <div>
              <ul>
                {goods.map(good => (
                  <div key={good} className="has-text-white">
                    <li>
                      {good}
                    </li>
                  </div>
                ))}
              </ul>

              <button
                type="button"
                className="button is-warning is-small mr-1"
                onClick={() => this.getReverse()}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-warning is-small mr-1"
                onClick={() => this.sortAlphabetically()}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-warning is-small mr-1"
                onClick={() => this.SortBylength()}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-warning is-small mr-1"
                onClick={() => this.getReset()}
              >
                Reset
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
