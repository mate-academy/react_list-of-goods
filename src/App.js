import React, { Component } from 'react';
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

class Interface extends Component {
  constructor() {
    super();

    this.state = {
      isStart: false,
      previousGoods: [(
        <button type="button" onClick={this.start}>Start</button>
      )],
      selectValue: 0,
    };
  }

  start = () => {
    this.setState({
      isStart: true,
      previousGoods: [...goodsFromServer],
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      previousGoods: prevState.previousGoods.reverse(),
    }));
  }

  sort = () => {
    this.setState(prevState => ({
      previousGoods: prevState.previousGoods.sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      previousGoods: prevState.previousGoods
        .sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({
      selectValue: 0,
      previousGoods: [...goodsFromServer],
    });
  }

  handleChangeSelect = (event) => {
    this.setState({
      selectValue: event.target.value,
      previousGoods: [...goodsFromServer]
        .filter(elem => elem.length === Number(event.target.value)),
    });
  }

  render() {
    return (
      <div>
        {this.state.isStart && (
          <>
            <div className="buttons">
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button
                type="button"
                onClick={this.sort}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button type="button" onClick={this.reset}>Reset</button>
            </div>

            <div className="filter">
              <strong>
                Filter by length
                {' '}
              </strong>

              <select
                value={this.state.selectValue}
                onChange={this.handleChangeSelect}
              >
                <option value={0} />
                {goodsFromServer
                  .map(elem => elem.length)
                  .sort((a, b) => a - b)
                  .filter((elem, i, arr) => i === arr.indexOf(elem))
                  .map(elem => (
                    <option value={elem}>{elem}</option>
                  ))}
              </select>
            </div>
          </>
        )}

        {this.state.previousGoods.map(elem => (
          <p>{elem}</p>
        ))}
      </div>
    );
  }
}

const App = () => (
  <div className="App">
    <h1>
      {`Goods ${goodsFromServer.length}`}
    </h1>
    <Interface />
  </div>
);

export default App;
