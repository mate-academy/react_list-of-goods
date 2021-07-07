import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    maxWordLength: 10,
    goods: this.props.goods,
  }

  listReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabets = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  resetOrder = () => {
    this.setState({
      goods: [...this.props.goods],
      maxWordLength: 10,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  selectLength = (e) => {
    this.setState({ maxWordLength: e.target.value });
  }

  render() {
    const { maxWordLength } = this.state;

    return (
      <>
        <div className="button-panel">
          <button type="button" onClick={this.listReverse}>
            Reverse
          </button>
          <button type="button" onClick={this.sortByAlphabets}>
            A-Z
          </button>
          <button type="button" onClick={this.resetOrder}>
            Reset
          </button>
          <button type="button" onClick={this.sortByLength}>
            Sort by length
          </button>
          <select
            value={this.state.maxWordLength}
            onChange={this.selectLength}
            className="select-btn"
          >
            {Array(10).fill('').map((number, index) => (
              <option value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <ul>
            {this.state.goods.filter(word => word.length <= maxWordLength)
              .map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
