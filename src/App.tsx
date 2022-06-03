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
  visibleGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    clickStart: false,
    visibleGoods: [...goodsFromServer],
  };

  getReset() {
    this.setState(prevState => ({ visibleGoods: [...prevState.goods] }));
  }

  getReverse() {
    this.setState((prevState) => (
      { visibleGoods: prevState.visibleGoods.reverse() }
    ));
  }

  SortBylength() {
    this.setState((prevState) => (
      {
        visibleGoods:
        prevState.visibleGoods.sort((a, b) => a.length - b.length),
      }
    ));
  }

  sortAlphabetically() {
    this.setState((prevState) => (
      {
        visibleGoods:
        [...prevState.visibleGoods.sort((a, b) => a.localeCompare(b))],
      }
    ));
  }

  startFinishButton() {
    this.setState((prevState) => ({ clickStart: !prevState.clickStart }));
  }

  render() {
    const { clickStart } = this.state;
    const { visibleGoods } = this.state;

    // eslint-disable-next-line no-console
    console.log(goodsFromServer);

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
                {visibleGoods.map(good => (
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
