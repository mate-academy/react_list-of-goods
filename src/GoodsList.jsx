import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: '',
  }

  showList = () => {
    this.setState({
      isVisible: true,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortListByAlph = () => {
    this.setState({
      sortBy: 'alph',
    });
  }

  sortListByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isVisible, isReversed, sortBy } = this.state;
    const { goods } = this.props;
    const goodsCopy = [...goods];

    goodsCopy.sort((el1, el2) => {
      switch (sortBy) {
        case 'alph':
          return el1.localeCompare(el2);
        case 'length':
          return el1.length - el2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div>
        {isVisible === false && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isVisible === true && (
          <div className="App">
            <ul>
              {goodsCopy.map(good => <li key={good}>{good}</li>)}
            </ul>

            <button type="button" onClick={this.reverseList}>Reverse</button>
            <button
              type="button"
              onClick={this.sortListByAlph}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortListByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
