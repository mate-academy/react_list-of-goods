import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Select from './Select';

class GoodsList extends React.Component {
  state = {
    goods: this.props.listOfGoods,
    length: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabet = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }))
  )

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.listOfGoods,
      length: 1,
    });
  }

  select = ({ target }) => {
    this.setState({
      length: target.value,
      goods: this.props.listOfGoods.filter(item => (
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
        <Button
          reverseList={this.reverse}
          alphabetSort={this.sortAlphabet}
          lengthSort={this.sortLength}
          reset={this.reset}
        />
        <Select
          value={length}
          action={this.select}
        />
      </div>
    );
  }
}

GoodsList.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
