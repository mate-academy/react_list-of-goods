import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortedBy: '',
    length: 1,
    arrayLength: [...Array(11).keys()],
  }

  lengthFilter = (event) => {
    this.setState({ length: event.target.value });
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortAlphabetically = () => {
    this.setState({ sortedBy: 'alphabetically' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedBy: '',
      length: 1,
    });
  }

  sortByLength = () => {
    this.setState({ sortedBy: 'length' });
  }

  render() {
    const { isReversed, sortedBy, length, arrayLength } = this.state;
    const copy = this.props.goods.filter(
      element => element.length >= this.state.length,
    );

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
        <select
          onChange={this.lengthFilter}
          value={length}
        >
          {arrayLength.map(element => (
            <option value={element}>
              {element}
            </option>
          ))}
        </select>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
