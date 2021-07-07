import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  state = {
    goods: [...this.props.content],
  }

  reverse = () => {
    this.setState({
      goods: this.state.goods.reverse(),
    });
  }

  sortByAlphabet = () => {
    this.setState({
      goods: this.state.goods.sort(),
    });
  }

  reset = () => {
    this.setState({
      goods: [...this.props.content],
    });
  }

  sortByLength = () => {
    this.setState({
      goods: this.state.goods.sort((a, b) => b.length - a.length),
    });
  }

  render() {
    return (
      <div className="list">
        <button type="button" onClick={this.reverse}>Reverse</button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <ul>
          {this.state.goods.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
