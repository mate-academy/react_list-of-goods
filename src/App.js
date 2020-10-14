import React, { Component } from 'react';
import './App.css';

const list = [
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

class App extends Component {
  state = {
    goodsFromServer: [...list],
    start: false,
    selectVal: 1,
  }

  show = () => {
    this.setState({ start: true });
  }

  reverse = () => {
    this.setState(prev => ({
      goodsFromServer: prev.goodsFromServer.reverse(),
    }));
  }

  Alphabetically = () => {
    this.setState(prev => ({
      goodsFromServer: prev.goodsFromServer.sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  }

  reset = () => {
    this.setState({
      goodsFromServer: [...list],
      selectVal: 1,
    });
  }

  lengthList = () => {
    this.setState(prev => ({
      goodsFromServer: prev.goodsFromServer.sort(
        (good1, good2) => good1.length - good2.length,
      ),
    }));
  }

  select = (e) => {
    this.setState({
      selectVal: e.target.value,
    });
    this.setState(prev => ({
      goodsFromServer: [...list].filter(
        good => good.length >= prev.selectVal,
      ),
    }));
  }

  render() {
    return (
      <div>
        <h1>Goods</h1>

        {
          this.state.start
            ? (
              <div>
                <ul>
                  {this.state.goodsFromServer.map(good => (
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
                  onClick={this.Alphabetically}
                >
                  Aphabetically
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={this.lengthList}
                >
                  By length
                </button>

                <select
                  value={this.state.selectVal}
                  onChange={this.select}
                >
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
            )
            : (
              <button
                type="button"
                onClick={this.show}
              >
                Start
              </button>
            )}
      </div>
    );
  }
}

export default App;
