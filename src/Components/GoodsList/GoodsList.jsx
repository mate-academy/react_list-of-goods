import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  defaultLength = 5;

  state = {
    goods: [...this.props.goods],
    initalGoods: [...this.props.goods],
    maxLength: this.defaultLength,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlfabeticaly = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...prevState.initalGoods],
      maxLength: this.defaultLength,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  inputHandler = (event) => {
    this.setState({
      maxLength: +event.target.value,
    });
  }

  render() {
    const { goods, maxLength } = this.state;
    const { reverse, sortAlfabeticaly,
      reset, sortByLength, inputHandler } = this;

    return (
      <div>
        <ul>
          {goods
            .filter(good => good.length >= maxLength)
            .map(good => (
              <li key={good}>{good}</li>
            ))}
        </ul>

        <div>
          <button
            type="button"
            onClick={reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={sortAlfabeticaly}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={reset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <div>
            <input
              type="range"
              name="length"
              min="0"
              max="10"
              onChange={inputHandler}
              value={maxLength}
            />
            {maxLength}
          </div>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
