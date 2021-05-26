import React from 'react';

import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
    length: 1,
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      length: 1,
    });
  }

  selectChange = (value) => {
    this.setState({ length: value });
  }

  render() {
    const { isReversed, sortBy, length } = this.state;
    const selectArr = Array(10).fill(0).map((_, i) => i + 1);
    const visibleGoods = [...this.props.goods]
      .filter(good => good.length >= length);

    visibleGoods.sort((f1, f2) => {
      switch (sortBy) {
        case 'length':
          return f1.length - f2.length;

        case 'alphabet':
          return f1.localeCompare(f2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <ul>
          {visibleGoods.map(good => <li key={good}>{good}</li>)}
        </ul>

        <div className="App__buttons">
          <button
            type="button"
            className="App__reverse-button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="App__sortAlpha-button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="App__sortLength-button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="App__reset-button"
            onClick={this.reset}
          >
            Reset
          </button>

          <select
            onChange={(event) => {
              this.selectChange(event.target.value);
            }}
            value={length}
          >
            {selectArr.map(el => (
              <option key={el} value={el}>{el}</option>))}
          </select>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
