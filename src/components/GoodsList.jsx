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
    filterByLength: '',
  };

  byLength = (event) => {
    this.setState({
      filterByLength: event.target.value,
      goods: this.props.goods.filter(
        good => good.length >= +event.target.value,
      ),
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortBy = (event) => {
    const { name } = event.target;

    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevGood, nextGood) => {
          switch (name) {
            case 'Sort By Name':
              return (prevState.sortByName
                ? nextGood.localeCompare(prevGood)
                : prevGood.localeCompare(nextGood));

            case 'Sort By Length':
              return (prevState.sortByLength
                ? nextGood.length - prevGood.length
                : prevGood.length - nextGood.length);

            default:
              return 0;
          }
        },
      ),

      sortByName: name === 'Sort By Name'
        ? !prevState.sortByName
        : prevState.sortByName,
      sortByLength: name === 'Sort By Length'
        ? !prevState.sortByLength
        : prevState.sortByLength,
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
      filterByLength: '',
      sortByLength: false,
      sortByName: false,
    });
  };

  render() {
    const { goods, filterByLength } = this.state;

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
          <Button onClick={this.sortBy} name="Sort By Name" />
          <Button onClick={this.reset} name="Reset" />
          <Button onClick={this.sortBy} name="Sort By Length" />
          <Select onChange={this.byLength} value={filterByLength} />
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
