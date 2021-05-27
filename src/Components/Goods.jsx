import React from 'react';
import PropTypes from 'prop-types';

class Goods extends React.Component {
    state = {
      isReversed: false,
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
      const { sortMethod, isReversed } = this.state;
      const visiableGoods = [...goods];

      switch (sortMethod) {
        case('sortByAlphabet'):
        visiableGoods.sort((a, b) => a.localeCompare(b));
        break;
        case('sortByLength'):
        visiableGoods.sort((a, b) => a.length - b.length);
        break;
        default:
          break;
      }

      if(isReversed) {
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
            onClick={() => this.setState({isReversed: !isReversed})}
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
