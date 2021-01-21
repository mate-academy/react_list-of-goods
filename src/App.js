import React from 'react';
import './App.css';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    visability: false,
    limit: 1,
    maxLength: 10,
  }

  start = () => {
    this.setState({
      visability: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      limit: 1,
    });
  }

  alphabet = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    });
  }

  lengthSort = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.length - b.length),
    });
  }

  limiter = (event) => {
    this.setState({
      limit: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>goods</h1>

        {!this.state.visability && (
          <button
            type="button"
            onClick={this.start}
            className="start"
          >
            Start
          </button>
        )}

        {this.state.visability && (
          <>
            Max length to display:
            {' '}

            <select
              className="limit-select"
              name="limiter"
              onChange={this.limiter}
              value={this.state.limit}
            >

              {[...Array(this.state.maxLength)].map((el, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}

            </select>

            <div>
              <button
                type="button"
                onClick={this.reset}
                className="button reset"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.reverse}
                className="button reverse"
              >
                ↑↓ Reverse
              </button>

              <button
                type="button"
                onClick={this.alphabet}
                className="button"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.lengthSort}
                className="button"
              >
                Sort by length
              </button>

              <ul className="list">
                {this.state.goods.map((good) => {
                  if (good.length >= this.state.limit) {
                    return (
                      <li
                        key={good}
                        className="list-item"
                      >
                        {good}
                      </li>
                    );
                  }

                  return (<></>);
                })}
              </ul>
            </div>
          </>
        )}

      </div>
    );
  }
}

export default App;
