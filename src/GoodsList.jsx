import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: null,
    length: '1',
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: null,
      length: '1',
    });
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  changeLength = (event) => {
    this.setState({ length: event.target.value });
  }

  render() {
    const { sortBy, isReversed, length } = this.state;
    const resultList = [...this.props.list].filter(
      word => word.length >= +length,
    );

    resultList.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      resultList.reverse();
    }

    return (
      <>
        <div
          style={{
            display: 'flex', gap: '10px',
          }}
        >
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <label htmlFor="length-select">Select min word length:</label>
          <select
            id="length-select"
            value={length}
            onChange={this.changeLength}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <ul>
          {resultList.map(word => (
            <li key={word}>
              {word}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.defaultProps = {
  list: [],
};

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
