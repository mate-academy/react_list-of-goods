import React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  render() {
    return (
      <div className="container">
        <h1>Goods</h1>
        <ul className="list">
          {this.state.goods.map(good => <li key={good}>{good}</li>)}
        </ul>

        <button
          type="button"
          className="reverse"
          onClick={() => {
            this.state.goods.reverse();

            this.forceUpdate();
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          className="sort_alphabetically"
          onClick={() => {
            this.state.goods.sort();

            this.forceUpdate();
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="reset"
          onClick={() => {
            this.setState({ goods: [...this.props.goods] });
          }}
        >
          Reset
        </button>

        <button
          type="button"
          className="sort_by_length"
          onClick={() => {
            this.state.goods.sort((a, b) => a.length - b.length);

            this.forceUpdate();
          }}
        >
          Sort by length
        </button>

        <select
          value={this.state.goods.length}
          onChange={(event) => {
            const cutter = (el, i) => i < event.target.value;

            this.setState({ goods: this.props.goods.filter(cutter) });
          }}
        >
          {new Array(this.props.goods.length).fill().map((n, i) => (
            <option
              value={i + 1}
              key={Math.random()}
            >
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

List.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
