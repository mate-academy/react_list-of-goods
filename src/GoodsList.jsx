import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    renderForm: false,
    isReversed: false,
    sortBy: '',
    goods: this.props.goods,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState(({ sortBy: 'name' }));
  };

  sortByLength = () => {
    this.setState(({ sortBy: 'length' }));
  };

  reset = () => {
    this.setState({
      isReversed: false, sortBy: '',
    });
  };

  render() {
    const { goods, isReversed, sortBy, renderForm } = this.state;
    const sortedGoods = [...goods];

    sortedGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'name':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        {!renderForm ? (
          <button
            type="button"
            onClick={() => {
              this.setState({ renderForm: true });
            }}
          >
            Start
          </button>
        ) : (
          <>
            <ul>
              {sortedGoods.map(good => (
                <li>
                  {good}
                </li>
              ))}
            </ul>

            <button
              className="btn"
              type="button"
              onClick={this.reverse}
            >
              reverse
            </button>

            <button
              className="btn"
              type="button"
              onClick={this.sortByName}
            >
              sort
            </button>

            <button
              className="btn"
              type="button"
              onClick={this.sortByLength}
            >
              sort for length
            </button>

            <button
              className="btn"
              type="button"
              onClick={this.reset}
            >
              reset
            </button>
          </>
        )
      }
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
