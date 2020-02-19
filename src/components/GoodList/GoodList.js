import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../Buttons/Buttons';
import { Select } from '../Select/Select';

export class GoodList extends React.Component {
  state = {
    goods: [...this.props.goodList],
    length: '1',
    goodsCopy: [...this.props.goodList],
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
      goods: prevState.goodsCopy,
      length: '1',
    }));
  }

  selectFunc = ({ target }) => {
    this.setState(prevState => ({
      length: target.value,
      goods: prevState.goodsCopy.filter(item => (
        item.length >= target.value)),
    }));
  }

  render() {
    const { goods, length } = this.state;

    return (
      <React.Fragment>
        <Buttons
          reverseBtn={this.reversed}
          sortBtn={this.sortAlph}
          sortLengthBtn={this.sortLength}
          resetBtn={this.reset}
        />
        <Select
          stringLength={length}
          selectBtn={this.selectFunc}
        />
        <ul>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

GoodList.propTypes = {
  goodList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
