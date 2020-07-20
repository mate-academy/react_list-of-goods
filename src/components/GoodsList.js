import React from 'react';
import PropTypes from 'prop-types';

export default class GoodsList extends React.Component {
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

GoodsList.propTypes = {
  goods: PropTypes.instanceOf(Array).isRequired,
};
