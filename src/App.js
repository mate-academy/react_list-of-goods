import React from 'react';
import PropTypes from 'prop-types';
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
    goods: goodsFromServer,
    show: false,
  }

  start = () => {
    this.setState(prev => ({
      show: !prev.show,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="btn btn-danger"
          type="button"
          onClick={this.start}
          style={!this.state.show
            ? { display: 'initial' }
            : { display: 'none' }
          }
        >
          Start
        </button>
        <div style={this.state.show
          ? { display: 'initial' }
          : { display: 'none' }
        }
        >
          <GoodsList goods={this.state.goods} />
        </div>
      </div>
    );
  }
}

class GoodsList extends React.Component {
  state = {
    minL: 1,
    goods: [...this.props.goods],
  }

  mixLength = (event) => {
    const newMinL = event.target.value;

    this.setState(prev => ({
      minL: newMinL,
    }));
  }

  reverse = () => {
    this.setState(prev => ({
      goods: prev.goods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prev => ({
      goods: prev.goods.sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prev => ({
      goods: prev.goods.sort((a, b) => b.length - a.length),
    }));
  }

  render() {
    const selections = [];

    for (let i = 1; i <= 10; i) {
      selections.push((<option value={i} key={i}>{i}</option>));
      i += 1;
    }

    return (
      <>
        <ul className="list-group">
          {this.state.goods
            .filter(x => x.length >= this.state.minL)
            .map(good => (
              <li key={good} className="list-group-item">
                {good}
              </li>
            ))}
        </ul>
        <div className="btn-group">
          <button
            className="btn btn-light"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            className="btn btn-light"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <br />
          <button
            className="btn btn-light"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <select
            className="btn dropdown-toggle btn-light"
            name="minL"
            value={this.state.minL}
            onChange={this.mixLength}
          >
            {selections}
          </select>
          <button
            className="btn btn-light"
            type="button"
            onClick={() => {
              this.setState({
                minL: 1,
                goods: [...this.props.goods],
              });
            }}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default App;

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};
