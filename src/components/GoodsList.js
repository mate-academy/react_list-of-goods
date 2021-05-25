import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    isReversed: false,
    sortedBy: '',
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      ...state,
      sortedBy: 'alphabetically',
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      ...state,
      sortedBy: 'length',
    }));
  }

  render() {
    const { goods, isReversed, sortedBy } = this.state;
    const copy = [...goods];

    copy.sort((a, b) => {
      switch (sortedBy) {
        case 'alphabetically':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copy.reverse();
    }

    return (
      <>
        <ul>
          {copy.map(element => (
            <li key={element}>
              {element}
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
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
