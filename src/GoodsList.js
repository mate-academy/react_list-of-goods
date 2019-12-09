import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import Select from './Select';

class GoodList extends React.Component {
  goodsFromServer = [...this.props.goods]

  state = {
    goodsArray: this.goodsFromServer,
    selectValue: 1,
  }

  reverse = () => {
    this.setState({ goodsArray: this.goodsFromServer.reverse() });
  }

  sortByName = () => {
    this.setState({
      goodsArray: this.goodsFromServer
        .sort((a, b) => a.localeCompare(b)),
    });
  }

  reset = () => {
    this.setState({
      goodsArray: [...this.props.goods],
      selectValue: 1,
    });
  }

  sortByLength = () => {
    this.setState({
      goodsArray: this.goodsFromServer
        .sort((a, b) => a.length - b.length),
    });
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
          <Buttons
            reverse={this.reverse}
            sortByName={this.sortByName}
            reset={this.reset}
            sortByLength={this.sortByLength}
          />
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
