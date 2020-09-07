import React from 'react';
import PropTypes from 'prop-types';

export class GoodList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...goods].reverse() });
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...goods].sort() });
          }}
        >
          Sort
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ goods: [...this.props.goods] });
          }}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              goods: [...goods].sort((a, b) => a.length - b.length),
            });
          }}
        >
          Sort by length
        </button>
      </>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
