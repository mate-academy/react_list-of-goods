import React from 'react';
import PropTypes from 'prop-types';
import { Goods } from './Goods';
import { Button } from './Button';
import { Select } from './Select';

export class GoodsList extends React.Component {
  state= {
    goods: this.props.goods,
    sortByLength: false,
    sortByName: false,
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortByName = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (a, b) => (prevState.sortByName
          ? b.localeCompare(a)
          : a.localeCompare(b)),
      ),
      sortByName: !prevState.sortByName,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (a, b) => (prevState.sortByLength
          ? b.length - a.length
          : a.length - b.length),
      ),
      sortByLength: !prevState.sortByLength,
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map(good => (
            <li key={good}>
              <Goods good={good} />
            </li>
          ))}
        </ul>
        <div>
          <Button onClick={this.reverse} name="Reverse" />
          <Button onClick={this.sortByName} name="Sort By Name" />
          <Button onClick={this.reset} name="Reset" />
          <Button onClick={this.sortByLength} name="Sort By Length" />
          <Select />
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
