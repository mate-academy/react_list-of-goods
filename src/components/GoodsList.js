import React from 'react';
import PropTypes from 'prop-types';

import Buttons from './Buttons';
import Select from './Select';

class GoodsList extends React.Component {
  state = {
    goods: [...this.props.listOfGoods],
    length: 1,
  }

  onReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  onSortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  onSortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  onReset = () => {
    this.setState({
      goods: [...this.props.listOfGoods],
      length: 1,
    });
  }

  onSelect = ({ target }) => {
    this.setState({
      length: target.value,
      goods: [...this.props.listOfGoods].filter(item => (
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
          reverseList={this.onReverse}
          alphabetSort={this.onSortAlphabet}
          lengthSort={this.onSortLength}
          reset={this.onReset}
        />
        <Select
          value={length}
          action={this.onSelect}
        />
      </div>
    );
  }
}

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
