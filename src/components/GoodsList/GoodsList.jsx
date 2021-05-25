import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: "alphabet" });
  };

  sortByLength = () => {
    this.setState({ sortBy: "length" });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;
    const visibleGoods = [...goods];
    
    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;

        case 'alphabet':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    };

    return (
      <>
        <div className="goodList">
          <ul>
            {visibleGoods.map(good => (
              <li key = {good}>{good}</li>
            ))}
          </ul>
        </div>

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
          Sort by alphabet
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
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
    )
  }
}

