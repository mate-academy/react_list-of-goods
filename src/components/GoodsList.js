import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    isHidden: true,
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({ goods: [...this.props.goods] });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  sortBySelectedLength = (event) => {
    const { value } = event.target;

    this.setState(
      { goods: this.props.goods.filter(item => item.length >= value) },
    );
  }

  render() {
    const { isHidden, goods } = this.state;
    const options = Array.from(Array(10), (e, i) => i + 1);

    return (
      <div>
        {isHidden
          && (
            <button
              type="button"
              onClick={() => {
                this.setState({ isHidden: false });
              }}
            >
              Start
            </button>
          )
        }
        {!isHidden
          && (
            <>
              <ul>
                {goods.map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByAlph}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <select
                onChange={this.sortBySelectedLength}
              >
                {options.map(number => (
                  <option
                    key={number}
                    value={number}
                  >
                    {number}
                  </option>
                ))}
              </select>
            </>
          )
        }
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
