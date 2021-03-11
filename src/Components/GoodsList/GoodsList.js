import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Things } from '../Things/Things';
import { Select } from '../Select/Select';
import { Buttons } from '../Buttons/Buttons';
import { Button } from '../Button/Button';

export class GoodsList extends Component {
  state = {
    isShown: false,
    goods: this.props.things,
    selectedValue: '1',
  }

  clickHandler = () => {
    this.setState({ isShown: true });
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabeticallyHandler = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetHandler = () => {
    const { things } = this.props;

    this.setState(() => ({
      goods: things,
      selectedValue: '1',
    }));
  }

  sortLengthHandler = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  changeHandler = ({ target }) => {
    const { value } = target;
    const { things } = this.props;

    this.setState(() => ({
      goods: [...things].filter(thing => thing.length >= value),
      selectedValue: value,
    }));
  }

  render() {
    const { isShown, goods, selectedValue } = this.state;

    return (
      <>
        { isShown
          ? <Things content={goods} />
          : <Button onClick={this.clickHandler} name="Show list" />
        }
        <Buttons
          reverse={this.reverseHandler}
          sortWords={this.sortAlphabeticallyHandler}
          reset={this.resetHandler}
          sortLength={this.sortLengthHandler}
        />
        <Select
          onChange={this.changeHandler}
          value={selectedValue}
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  things: PropTypes.arrayOf(PropTypes.string).isRequired,
};
