import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.reverse,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { goods } = this.props;

    goods.sort((a, b) => {
      switch (this.state.sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      goods.reverse();
    }

    return (
      <>
        <ul className="list">
          {goods.map(good => (
            <li className="list__item" key={good}>
              {good}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: 'name',
            });
          }}
        >
          Sort by alphabet
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({
              sortBy: 'length',
            });
          }}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
