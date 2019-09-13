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

const listForSelect = goodsFromServer
  .map(elem => elem.length)
  .sort((a, b) => a - b)
  .filter((elem, i, arr) => i === arr.indexOf(elem));

class Interface extends Component {
  constructor() {
    super();

    this.state = {
      isStarted: false,
      previousGoods: [...goodsFromServer],
      selectedValue: 0,
    };
  }

  onButtonStartClick = () => {
    this.setState({
      isStarted: true,
    });
  }

  onButtonReverseClick = () => {
    this.setState(prevState => ({
      previousGoods: [...prevState.previousGoods].reverse(),
    }));
  }

  onButtonSortClick = () => {
    this.setState(prevState => ({
      previousGoods: [...prevState.previousGoods].sort(),
    }));
  }

  onButtonSortByLengthClick = () => {
    this.setState(prevState => ({
      previousGoods: [...prevState.previousGoods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  onButtonResetClick = () => {
    this.setState({
      selectedValue: 0,
      previousGoods: [...goodsFromServer],
    });
  }

  handleChangeSelect = (event) => {
    this.setState({
      selectedValue: event.target.value,
      previousGoods: [...goodsFromServer]
        .filter(elem => elem.length === Number(event.target.value)),
    });
  }

  render() {
    return (
      <div>
        {this.state.isStarted && (
          <>
            <div className="buttons">
              <button
                type="button"
                onClick={this.onButtonReverseClick}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.onButtonSortClick}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.onButtonSortByLengthClick}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.onButtonResetClick}
              >
                Reset
              </button>
            </div>

            <div className="filter">
              <strong>
                Filter by length
                {' '}
              </strong>

              <select
                value={this.state.selectedValue}
                onChange={this.handleChangeSelect}
              >
                <option value={0} />
                {listForSelect
                  .map(elem => (
                    <option value={elem}>{elem}</option>
                  ))}
              </select>
            </div>
          </>
        )}

        {(this.state.isStarted && this.state.previousGoods.map(elem => (
          <p>{elem}</p>
        ))) || (
          <button
            type="button"
            onClick={this.onButtonStartClick}
          >
            Start
          </button>
        )}
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
