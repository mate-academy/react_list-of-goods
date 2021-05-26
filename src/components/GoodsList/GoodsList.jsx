import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.reverse,
    }));
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { goods } = this.props;
    const copy = [...goods];

    copy.sort((a, b) => {
      switch (this.state.sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      copy.reverse();
    }

    return (
      <>
        <ul className="list">
          {copy.map(good => (
            <li className="list__item" key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="container">
          <button
            type="button"
            className="list__btn"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="list__btn"
            onClick={() => {
              this.setState({
                sortBy: 'name',
              });
            }}
          >
            Sort by alphabet
          </button>
          <button
            type="button"
            className="list__btn"
            onClick={() => {
              this.setState({
                sortBy: 'length',
              });
            }}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="list__btn"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
