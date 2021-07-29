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
  }

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;

        case 'alphabet':
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <div className="goodList">
          <ul>
            {visibleGoods.map(good => (
              <li key={good}>
                {good}
              </li>
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
          onClick={() => {
            this.setState({ sortBy: 'alphabet' });
          }}
        >
          Sort by alphabet
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ sortBy: 'length' });
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isReversed: false,
              sortBy: '',
            });
          }}
        >
          Reset
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
