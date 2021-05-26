import React from 'react';
import PropTypes from 'prop-types';

class Goods extends React.Component {
    state = {
      isReversed: false,
      sortMethod: null,
      length: 1,
    };

    componentDidMount() {
      this.defaultConditions = this.state;
    }

    reverse = () => {
      this.setState(({ isReversed }) => ({ isReversed: !isReversed }));
    }

    sortFunction = (event) => {
      const { name } = event.target;

      this.setState(({ sortMethod }) => ({
        sortMethod: sortMethod === name ? null : name,
      }));
    }

    reset = () => {
      this.setState(this.defaultConditions);
    }

    setLength = (event) => {
      this.setState({
        length: event.target.value,
      });
    }

    render() {
      const { goods } = this.props;
      const { isReversed, sortMethod, length } = this.state;
      const visiableGoods = goods.filter(good => good.length >= length);

      if (sortMethod === 'sortByAlphabet') {
        visiableGoods.sort((a, b) => a.localeCompare(b));
      }

      if (sortMethod === 'sortByLength') {
        visiableGoods.sort((a, b) => a.length - b.length);
      }

      if (isReversed) {
        visiableGoods.reverse();
      }

      return (
        <div>
          <ul>
            {visiableGoods.map(good => <li key={good}>{good}</li>)}
          </ul>
          <button
            type="button"
            name="reverse"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            name="sortByLength"
            onClick={event => this.sortFunction(event)}
          >
            Sort by Length
          </button>

          <button
            type="button"
            name="sortByAlphabet"
            onClick={event => this.sortFunction(event)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            name="resetFilter"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      );
    }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
