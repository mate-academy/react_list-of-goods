import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.css';
import { Button } from '../Button';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (current, next) => current.length - next.length,
      ),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="goods">
        <ul className="list">
          {
            goods.map(good => (
              <li key={good} className="list__item">
                {good}
              </li>
            ))
          }
        </ul>
        <Button onClick={this.reverse} text="Reverse" />
        <Button onClick={this.sortAlphabetically} text="Sort alphabetically" />
        <Button onClick={this.sortByLength} text="Sort by length" />
        <Button onClick={this.reset} text="Reset" />
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
