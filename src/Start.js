import React from 'react';
import PropTypes from 'prop-types';

class Start extends React.PureComponent {
  state = {
    isVisible: false,
    goods: [...this.props.goods],
    wordLength: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedWordLength: 1,
  }

  handleStart = () => {
    this.setState({ isVisible: true });
  }

  handleReverse = () => {
    this.setState(({ goods }) => (
      {
        goods: [...goods].reverse(),
      }
    ));
  }

  handleSortAlphabetically = () => {
    this.setState(({ goods }) => (
      {
        goods: [...goods].sort(),
      }
    ));
  }

  handleSortByLength = () => {
    this.setState(({ goods }) => (
      {
        goods: [...goods].sort((a, b) => (
          a.length - b.length
        )),
      }
    ));
  }

  handleReset = () => {
    this.setState(({ goods, selectedWordLength }) => (
      {
        goods: [...this.props.goods],
        selectedWordLength: 1,
      }
    ));
  }

  handleDefineLength = (event) => {
    this.setState({ selectedWordLength: event.target.value });
  }

  unpackList = () => {
    const { wordLength, goods, selectedWordLength } = this.state;

    return (
      <>
        <ul>
          {goods.filter(el => el.length >= selectedWordLength).map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <button type="button" onClick={this.handleReverse}>Reverse</button>
        <button
          type="button"
          onClick={this.handleSortAlphabetically}
        >
          Sort Alphabetically
        </button>
        <button
          type="button"
          onClick={this.handleSortByLength}
        >
          Sort by Length
        </button>
        <button type="button" onClick={this.handleReset}>Reset</button>
        <select
          onChange={this.handleDefineLength}
          value={selectedWordLength}
        >
          {wordLength.map((el, index) => (
            <option key={el}>{index + 1}</option>
          ))}
        </select>
      </>
    );
  }

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {!isVisible
        && <button type="button" onClick={this.handleStart}>Start</button>}
        {isVisible && this.unpackList()}
      </>
    );
  }
}

Start.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Start;
