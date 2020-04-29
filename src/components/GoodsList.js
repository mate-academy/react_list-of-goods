import React from 'react';
import PropTypes from 'prop-types';

class GoodsList extends React.Component {
  state = {
    isHidden: true,
    goods: [...this.props.goods],
    defaultSelectValue: 1,
  }

  options = [...Array(10).keys()].map(x => x + 1);

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(
      {
        goods: [...this.props.goods],
        defaultSelectValue: 1,
      },
    );
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  setSelectValue = (event) => {
    this.setState({
      defaultSelectValue: event.target.value,
    });
  }

  render() {
    const { isHidden, goods, defaultSelectValue } = this.state;

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
                {goods
                  .filter(item => item.length >= defaultSelectValue)
                  .map(item => (
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
                onChange={this.setSelectValue}
                value={defaultSelectValue}
              >
                {this.options.map(number => (
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
