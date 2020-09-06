import React from 'react';
import PropTypes from 'prop-types';
import { Good } from './Good';

export class GoodsList extends React.Component {
  state = {
    hidden: true,
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: [...this.props.goods],
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { hidden, goods } = this.state;

    return (
      <>
        {hidden && (
          <button
            type="button"
            onClick={() => {
              this.setState({ hidden: false });
            }}
          >
            Start
          </button>
        )}
        {!hidden && (
          <div>
            <ul className="goods">
              {goods.map(good => (
                <Good good={good} key={good} />
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
              onClick={this.sortAlphabetically}
            >
              Sort A-Z
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
              Sort by Length
            </button>
          </div>
        )}
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
