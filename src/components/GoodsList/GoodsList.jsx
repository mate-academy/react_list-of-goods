import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class GoodsList extends React.Component {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: '',
    goods: this.props.goods,
  };

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  render() {
    const { goods, isVisible, isReversed, sortBy } = this.state;
    const sortedGoods = goods.filter(item => item);

    sortedGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible
          ? (
            <button
              type="button"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                className={classNames(`btn`, {
                  active: isReversed,
                })}
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                className={classNames(`btn`, {
                  active: sortBy === 'alphabet',
                })}
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort by alphabet
              </button>
              <button
                className={classNames(`btn`, {
                  active: sortBy === 'length',
                })}
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="btn"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <ul>
                {sortedGoods.map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
