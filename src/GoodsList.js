import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goodsFromServer],
    sortBy: '',
    reversed: false,
  }

  render() {
    const reverse = () => {
      this.setState({ reversed: true });
    };

    const sortAlphabetically = () => {
      this.setState({ sortBy: 'Alphabetically' });
    };

    const reset = () => {
      this.setState({
        goods: [...this.props.goodsFromServer],
        sortBy: '',
        reversed: false,
      });
    };

    const sortByLength = () => {
      this.setState({ sortBy: 'ByLength' });
    };

    if (this.state.reversed) {
      this.state.goods.reverse();
    }

    this.state.goods.sort(
      (thing1, thing2) => {
        switch (this.state.sortBy) {
          case 'ByLength':
            return thing1.length - thing2.length;

          case 'Alphabetically':
            return thing1.localeCompare(thing2);

          default:
            return 0;
        }
      },
    );

    return (
      <>
        <button
          type="button"
          onClick={reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={sortAlphabetically}
        >
          Sort Alphabetically
        </button>
        <button
          type="button"
          onClick={sortByLength}
        >
          Sort By Length
        </button>
        <button
          type="button"
          onClick={reset}
        >
          reset
        </button>
        <ul>
          {this.state.goods.map(
            thing => <li key={thing}>{thing}</li>,
          )}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
