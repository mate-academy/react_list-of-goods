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

const indexOfGoods = [];

for (let i = 1; i < 11; i += 1) {
  indexOfGoods.push(i);
}

class App extends React.Component {
  state = {
    startIsVisible: true,
    visibleGoods: [...goodsFromServer],
    length: 1,
  }

  render() {
    return (
      <div className="App">
        <button
          className="button button_start"
          type="button"
          onClick={() => {
            this.setState({ startIsVisible: false });
          }}
          hidden={!this.state.startIsVisible}
        >
          start
        </button>

        <div className="button-wrapper" hidden={this.state.startIsVisible}>
          <button
            hidden={this.state.startIsVisible}
            className="button"
            type="button"
            onClick={() => this.setState(
              state => ({ visibleGoods: state.visibleGoods.reverse() }),
            )}
          >
            reverse
          </button>
          <button
            hidden={this.state.startIsVisible}
            className="button"
            type="button"
            onClick={() => this.setState(
              state => ({
                visibleGoods: state.visibleGoods.sort(
                  (a, b) => a.localeCompare(b),
                ),
              }),
            )}
          >
            Sort alphabetically
          </button>
          <button
            hidden={this.state.startIsVisible}
            className="button"
            type="button"
            onClick={
              () => this.setState({ visibleGoods: [...goodsFromServer] })}
          >
            Reset
          </button>
          <button
            hidden={this.state.startIsVisible}
            className="button"
            type="button"
            onClick={() => this.setState(
              state => ({
                visibleGoods: state.visibleGoods.sort(
                  (a, b) => a.length - b.length,
                ),
              }),
            )}
          >
            Sort by length
          </button>
        </div>
        <div className="wrapper" hidden={this.state.startIsVisible}>
          <h1>
            Goods
          </h1>
          <select
            value={9}
            onChange={event => this.setState({ length: event.target.value })}
          >
            {indexOfGoods.map(index => (
              <option value={index} key={index}>
                {index}
              </option>
            ))}
          </select>
          <ul hidden={this.state.startIsVisible}>
            {this.state.visibleGoods
              .filter(good => good.length >= this.state.length).map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
