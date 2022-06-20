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
  isStarted: boolean,
  isReversed: boolean,
  isSorted: Sorting,
  length: number,
};

enum Sorting {
  Default,
  Asc,
  Length,
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    isSorted: Sorting.Default,
    length: 1,
  };

  handleToStart = () => {
    this.setState({ isStarted: true });
  };

  handleToReset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      isSorted: Sorting.Default,
      length: 1,
    });
  };

  sortByReverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByAscend = () => {
    this.setState({ isSorted: Sorting.Asc });
  };

  sortByLength = () => {
    this.setState({ isSorted: Sorting.Length });
  };

  render() {
    const {
      goods,
      isStarted,
      isReversed,
      isSorted,
      length,
    } = this.state;

    let visibleGoods = [...goods].filter(good => good.length >= length);

    switch (isSorted) {
      case Sorting.Asc:
        visibleGoods.sort((firstWord, secondWord) => (
          firstWord.localeCompare(secondWord)
        ));
        break;
      case Sorting.Length:
        visibleGoods.sort((firstWord, secondWord) => (
          firstWord.length - secondWord.length
        ));
        break;
      default:
        (visibleGoods = [...goods]);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {
              (!isStarted
                && (
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.handleToStart}
                  >
                    Start
                  </button>
                )
              )
            }
          </div>

        </div>
        {(
          isStarted
          && (
            <div className="row">
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.sortByReverse}
                >
                  Reverse
                </button>
              </div>

              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.sortByAscend}
                >
                  Ascending
                </button>
              </div>

              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.sortByLength}
                >
                  By Length
                </button>
              </div>

              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.handleToReset}
                >
                  Reset
                </button>
              </div>

              <div className="col-md-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="length"
                  value={length}
                  onChange={(event) => {
                    this.setState({
                      length: Number(event.target.value),
                    });
                  }}
                >
                  <option selected>--Choose--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <br />
              <br />
              <div className="col-md-12 text-center">
                <ul>
                  {visibleGoods
                    .filter((filterGood) => filterGood.length >= length)
                    .map((good) => (
                      <li key={good} className="list-unstyled">
                        {good}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )
        )}

      </div>
    );
  }
}

export default App;
