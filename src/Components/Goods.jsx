import React from 'react';
import PropTypes from 'prop-types';

class Goods extends React.Component {
    state = {
      sortMethod: '',
    };

    componentDidMount() {
      this.defaultConditions = {...this.state};
    }

    sortFunction = (event) => {
      const { name } = event.target;

      this.setState(({ sortMethod }) => ({
        sortMethod: sortMethod === name ? '' : name,
      }));
    }

    reset = () => {
      this.setState(this.defaultConditions);
    }

    render() {
      const { goods } = this.props;
      const { sortMethod } = this.state;
      const visiableGoods = [...goods];

      switch (sortMethod) {
        case('sortByAlphabet'):
        visiableGoods.sort((a, b) => a.localeCompare(b));
        break;
        case('sortByLength'):
        visiableGoods.sort((a, b) => a.length - b.length);
        break;
        case('reverse'):
        visiableGoods.reverse();
        break;
        default:
          break;
      }

      return (
        <div>
          <ul>
            {visiableGoods.map(good => <li key={good}>{good}</li>)}
          </ul>
          <button
            type="button"
            name="reverse"
            onClick={event => this.sortFunction(event)}
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
