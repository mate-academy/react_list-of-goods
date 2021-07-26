import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

import './GoodsList.css';

export class GoodsList extends React.PureComponent {
  state = {
    goods: this.props.goods,
    reverse: false,
    sortBy: null,
  };

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  sortAlphabetically = () => {
    this.setState(({
      sortBy: 'name',
      reverse: false,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      sortBy: 'length',
      reverse: false,
    }));
  }

  reset = () => {
    this.setState(({
      sortBy: null,
      reverse: false,
    }));
  }

  render() {
    const { goods, reverse, sortBy } = this.state;
    const newGoods = [...goods];

    if (reverse) {
      newGoods.reverse();
    }

    if (sortBy !== null) {
      switch (sortBy) {
        case 'name':
          newGoods.sort((current, next) => (
            current.name.localeCompare(next.name)
          ));
          break;
        case 'length':
          newGoods.sort((current, next) => (
            current.name.length - next.name.length
          ));
          break;
        default:
          break;
      }
    }

    return (
      <div className="list-container">
        <ul className="list">
          {newGoods.map(good => (
            <li
              key={good.id}
              className="list__item"
            >
              {good.name}
            </li>
          ))}
        </ul>
        <div className="controls">
          <Button onClick={this.reverse} name="Reverse" />
          <Button onClick={this.sortAlphabetically} name="Sort ABC" />
          <Button onClick={this.sortByLength} name="Sort LEN" />
          <Button onClick={this.reset} name="Reset" />
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
