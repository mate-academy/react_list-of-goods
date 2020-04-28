import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Select from './Select';

class GoodsList extends Component {
  state={
    goodsList: [],
    visibleStartBtn: true,
    visibleControlBtns: false,
    visibleSelect: false,
  };

  start = () => {
    this.setState({
      goodsList: [...this.props.goodsList],
      visibleStartBtn: false,
      visibleControlBtns: true,
      visibleSelect: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList.reverse()],
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList.sort((a, b) => (
        a.localeCompare(b)
      ))],
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList.sort((a, b) => (
        a.length - b.length
      ))],
    }));
  };

  select = (length) => {
    this.setState(state => ({
      goodsList: [...this.props.goodsList.filter(good => (
        good.length >= length
      ))],
    }));
  };

  render() {
    const { visibleStartBtn, visibleControlBtns, visibleSelect } = this.state;

    return (
      <section className="goods">
        <ul className="goods__list">
          {this.state.goodsList.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <Select
          action={this.select}
          visible={visibleSelect}
        />
        <Button
          text="Start"
          action={this.start}
          visible={visibleStartBtn}
        />
        <Button
          text="Reverse"
          action={this.reverse}
          visible={visibleControlBtns}
        />
        <Button
          text="Sort alphabetically"
          action={this.sortAlphabetically}
          visible={visibleControlBtns}
        />
        <Button
          text="Sort by length"
          action={this.sortByLength}
          visible={visibleControlBtns}
        />
        <Button
          text="Reset"
          action={this.start}
          visible={visibleControlBtns}
        />
      </section>
    );
  }
}

GoodsList.defaultProps = {
  goodsList: [],
};

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
};

export default GoodsList;
