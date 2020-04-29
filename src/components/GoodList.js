import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Select from './Select';

class GoodList extends React.Component {
  state = {
    goods: [...this.props.goodList],
    length: 1,
    startingGoods: [...this.props.goodList],
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sortOnAlphabet = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  }

  sortOnLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.length - b.length),
    }));
  }

  resetAll = () => {
    this.setState(prevState => ({
      length: 1,
      goods: prevState.startingGoods,
    }));
  }

  chooseMethod = ({ target }) => {
    this.setState(prevState => ({
      length: target.value,
      goods: prevState.startingGoods.filter(item => (
        item.length >= target.value)),
    }));
  }

  render() {
    const { goods, length } = this.state;

    return (
      <div>
        <ul>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <Buttons
          handleReverse={this.reverse}
          handleOnAlphabetSort={this.sortOnAlphabet}
          handleLengthSort={this.sortOnLength}
          handleReset={this.resetAll}
        />
        <Select
          stringLength={length}
          selectButton={this.chooseMethod}
        />
      </div>
    );
  }
}

GoodList.propTypes = {
  goodList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodList;
