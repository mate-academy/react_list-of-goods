import React from 'react';
import PropTypes from 'prop-types';

export class List extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  getOptions() {
    const options = [];

    for (let i = 1; i <= this.props.goods.length; i += 1) {
      options.push(
        <option
          value={i}
          key={i}
        >
          {i}
        </option>,
      );
    }

    return options;
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
            this.setState(prev => (
              {
                goods: [...prev.goods].reverse(),
              }
            ));
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          className="sort_alphabetically"
          onClick={() => {
            this.setState(prev => (
              {
                goods: [...prev.goods].sort(),
              }
            ));
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="reset"
          onClick={() => {
            this.setState({
              goods: [...this.props.goods],
            });
          }}
        >
          Reset
        </button>

        <button
          type="button"
          className="sort_by_length"
          onClick={() => {
            this.setState(prev => (
              {
                goods: [...prev.goods].sort((a, b) => a.length - b.length),
              }
            ));
          }}
        >
          Sort by length
        </button>

        <select
          value={this.state.goods.length}
          onChange={(event) => {
            const updatedGoods = this.props.goods.slice(0, event.target.value);

            this.setState({ goods: updatedGoods });
          }}
        >
          {this.getOptions()}
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
