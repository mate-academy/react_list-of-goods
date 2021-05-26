import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    arrayList: [...this.props.goods],
  }

  reverseList = () => {
    this.setState(state => ({
      arrayList: [...state.arrayList].reverse(),
    }));
  };

  sortList = () => {
    this.setState(state => ({
      arrayList: [...state.arrayList].sort(),
    }));
  };

  sortByLengthList = () => {
    this.setState(state => ({
      arrayList: [...state.arrayList].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.reverseList}>Reverse</button>

        <button
          type="button"
          onClick={this.sortList}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLengthList}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              arrayList: [...this.props.goods],
            });
          }}
        >
          Reset
        </button>

        <ul>
          {this.state.arrayList.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
