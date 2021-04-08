import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class GoodsList extends React.Component {
  state = {
    sortBy: '',
    reversed: false,
  }

  render() {
    const goods = [...this.props.goodsFromServer];

    const reverse = () => {
      this.setState(state => ({ reversed: !state.reversed }));
    };

    const sortAlphabetically = () => {
      this.setState({ sortBy: 'Alphabetically' });
    };

    const reset = () => {
      this.setState({
        sortBy: '',
        reversed: false,
      });
    };

    const sortByLength = () => {
      this.setState({ sortBy: 'ByLength' });
    };

    goods.sort(
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

    if (this.state.reversed) {
      goods.reverse();
    }

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
          {goods.map(
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
