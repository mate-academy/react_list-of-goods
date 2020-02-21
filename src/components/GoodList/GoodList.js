import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../Buttons/Buttons';
import { Select } from '../Select/Select';

export class GoodList extends React.Component {
  state = {
    goods: [...this.props.goodList],
    minLength: 1,
    originalGoods: [...this.props.goodList],
  }

  reversed = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  sortAlph = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort(),
    }));
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: prevState.originalGoods,
      minLength: 1,
    }));
  }

  selectFunc = ({ target }) => {
    this.setState(prevState => ({
      minLength: target.value,
      goods: prevState.originalGoods.filter(item => (
        item.length >= target.value)),
    }));
  }

  render() {
    const { goods, minLength } = this.state;

    return (
      <>
        <Buttons
          handleReverse={this.reversed}
          handleAlphabetSort={this.sortAlph}
          handleLengthSort={this.sortLength}
          handleReset={this.reset}
        />
        <Select
          stringLength={minLength}
          selectBtn={this.selectFunc}
        />
        <ul>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

GoodList.propTypes = {
  goodList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
