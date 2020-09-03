import React from 'react';
import PropTypes from 'prop-types';

class ListOfGoods extends React.Component {
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

        <div>
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
            Sort alphabetically
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
              this.setState({ goods: [...goods.sort((a, b) => b.length - a.length)] });
            }}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGoods;
