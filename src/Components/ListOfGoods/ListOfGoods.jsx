import PropTypes from 'prop-types';
import React from 'react';

const numbers = [...Array(10)].map((n, i) => i + 1);

export class ListOfGoods extends React.Component {
  state = {
    reverse: false,
    sortBy: '',
    selectLength: 1,
  };

  reset = () => {
    this.setState({
      reverse: false,
      sortBy: '',
      selectLength: 1,
    });
  }

  goodsRevers = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  goodsSortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  goodsSortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  selectLength = (event) => {
    this.setState({ selectLength: event.target.value });
  }

  render() {
    const { goods } = this.props;
    const { selectLength, sortBy, reverse } = this.state;

    const copyGoods = goods.filter(good => (
      good.length >= selectLength
    ));

    copyGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return b.length - a.length;
        default:
          return 0;
      }
    });

    if (reverse) {
      copyGoods.reverse();
    }

    return (
      <>
        <button
          type="button"
          className="container__Button-list"
          onClick={this.goodsRevers}
        >
          Reverse
        </button>

        <button
          type="button"
          className="container__Button-list"
          onClick={this.goodsSortByName}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="container__Button-list"
          onClick={this.goodsSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="container__Button-list"
          onClick={this.reset}
        >
          Reset
        </button>

        <div className="container__select">
          <label htmlFor="minLength" className="container__label">
            Select the minimum list length:
            <select
              className="container__button-select"
              id="minLength"
              name="minLength"
              onChange={event => this.selectLength(event)}
              value={selectLength}
            >
              {numbers.map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </label>
        </div>
        <ul className="container__list">
          {copyGoods.map(name => (
            <li
              key={name}
              className="container__items"
            >
              {name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
