import React from 'react';
import PropsTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetToDefalut = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={this.reverseList}
          className="button"
          type="button"
        >
          Reverse
        </button>
        <button
          onClick={this.sortAlphabetically}
          className="button"
          type="button"
        >
          Sort alphabetically
        </button>
        <button
          onClick={this.sortByLength}
          className="button"
          type="button"
        >
          Sort by length
        </button>
        <button
          onClick={this.resetToDefalut}
          className="button"
          type="button"
        >
          Reset
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropsTypes.arrayOf(
    PropsTypes.string,
  ).isRequired,
};
