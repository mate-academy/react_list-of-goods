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
            goods.reverse();
            this.forceUpdate();
          }}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => {
            goods.sort();
            this.forceUpdate();
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
            goods.sort((a, b) => a.length - b.length);
            this.forceUpdate();
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
