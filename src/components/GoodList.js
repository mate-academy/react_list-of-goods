import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Select from './Select';

class GoodList extends React.Component {
  state = {
    goods: [...this.props.goodList],
    length: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortInAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  resetAll = () => {
    this.setState({
      goods: [...this.props.goodList],
      length: 1,
    });
  }

  chooseMethod = ({ target }) => {
    this.setState({
      length: target.value,
      goods: [...this.props.goodList].filter(item => (
        item.length >= target.value)),
    });
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
          handleSortInAlphabet={this.sortInAlphabet}
          handleSortByLength={this.sortByLength}
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
