import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Select from './Select';

class GoodList extends React.Component {
  state = {
    goodsArray: [...this.props.goods],
    selectValue: 1,
  }

  reverse = () => {
    this.setState(state => ({ goodsArray: state.goodsArray.reverse() }));
  }

  sortByName = () => {
    this.setState(state => ({
      goodsArray: state.goodsArray
        .sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goodsArray: [...this.props.goods],
      selectValue: 1,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsArray: state.goodsArray
        .sort((a, b) => a.length - b.length),
    }));
  }

  changeSelect = (event) => {
    this.setState({
      goodsArray: [...this.props.goods]
        .filter(good => good.length >= event.target.value),
      selectValue: event.target.value,
    });
  }

  render() {
    const { show, handleClick } = this.props;
    const { goodsArray, selectValue } = this.state;

    if (show) {
      return (
        <>
          <Filter title="reverse" callback={this.reverse} />
          <Filter title="sort by name" callback={this.sortByName} />
          <Filter title="sort by length" callback={this.sortByLength} />
          <Filter title="reset" callback={this.reset} />
          <Select
            changeSelect={this.changeSelect}
            selectValue={selectValue}
          />
          <ul>
            {goodsArray.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleClick()}
      >
          Start
      </button>
    );
  }
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GoodList;
