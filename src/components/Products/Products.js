import React from 'react';
import PropTypes from 'prop-types';

export class Products extends React.Component {
  state = {
    list: [...this.props.goods],
  };

  isReverse = () => {
    this.setState(state => ({
      list: [...state.list.reverse()],
    }));
  }

  isSort = () => {
    this.setState(state => ({
      list: [...state.list.sort()],
    }));
  }

  isSortLength = () => {
    this.setState(state => ({
      list: [...state.list.sort((a, b) => a.length - b.length)],
    }));
  }

  isReset = () => {
    this.setState({
      list: [...this.props.goods],
    });
  }

  render() {
    return (
      <>
        <ul className="list">
          {this.state.list.map(product => (
            <li key={product}>
              {product}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button type="button" onClick={this.isReverse}>
            reverse
          </button>
          <button type="button" onClick={this.isSort}>
            isSort
          </button>
          <button type="button" onClick={this.isSortLength}>
            isSortLength
          </button>
          <button type="button" onClick={this.isReset}>
            isReset
          </button>
        </div>
      </>
    );
  }
}

Products.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
