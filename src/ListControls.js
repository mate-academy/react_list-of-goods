import React from 'react';
import PropTypes from 'prop-types';

const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ListControls extends React.Component {
  state = {
    goodLength: 1,
  }

  filterMinLengthGoods = (event) => {
    const { value } = event.target;
    const { changeGoodsList, initialGoods } = this.props;

    this.setState({
      goodLength: value,
    });

    changeGoodsList(initialGoods.filter(good => good.length >= value));
  }

  reverseGoods = () => {
    const { changeGoodsList, currentGoods } = this.props;

    changeGoodsList([...currentGoods].reverse());
  }

  sortGoods = () => {
    const { changeGoodsList, currentGoods } = this.props;

    changeGoodsList([...currentGoods].sort((a, b) => a.localeCompare(b)));
  }

  resetGoods = () => {
    const { changeGoodsList, initialGoods } = this.props;

    this.setState({
      goodLength: 1,
    });

    changeGoodsList(initialGoods);
  }

  sortGoodsByLength = () => {
    const { changeGoodsList, currentGoods } = this.props;

    changeGoodsList([...currentGoods].sort((a, b) => a.length - b.length));
  }

  render() {
    const { goodLength } = this.state;

    return (
      <div className="goods__sort-buttons">
        <button
          type="button"
          className="goods__buttons-item"
          onClick={this.reverseGoods}
        >
          reverse
        </button>

        <button
          type="button"
          className="goods__buttons-item"
          onClick={this.sortGoods}
        >
          sort
        </button>

        <button
          type="button"
          className="goods__buttons-item"
          onClick={this.resetGoods}
        >
          reset
        </button>

        <button
          type="button"
          className="goods__buttons-item"
          onClick={this.sortGoodsByLength}
        >
          sort by length
        </button>

        <select
          value={goodLength}
          className="goods__select"
          onChange={this.filterMinLengthGoods}
        >
          {selectOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
}

ListControls.propTypes = {
  changeGoodsList: PropTypes.func.isRequired,
  initialGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListControls;
