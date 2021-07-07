import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { GoodsList } from '../GoodsList';
import { LengthSelect } from '../Select';

function makeRange(arr) {
  const maxLength = arr.reduce((acc, item) => (
    acc < item.length ? item.length : acc
  ), 0);

  const range = [];

  for (let i = 1; i <= maxLength + 1; i += 1) {
    range.push(i);
  }

  return range;
}

export class Content extends React.PureComponent {
  state = {
    goods: this.props.goods,
    minLength: 0,
    sortBy: 'id',
    isReversed: false,
    range: makeRange(this.props.goods),
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: 'id',
      minLength: 0,
    });
  }

  changeMinLength = (event) => {
    this.setState({ minLength: +event.target.value });
  }

  render() {
    const {
      goods,
      minLength,
      isReversed,
      sortBy,
      range,
    } = this.state;

    const visibleGoods = goods.filter(good => (
      good.length >= minLength
    ));

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'id':
        case 'length':
          return a[sortBy] - b[sortBy];

        case 'alphabet':
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <GoodsList goods={visibleGoods} />

        <div>
          <Button
            name="Reverse"
            onClick={this.reverse}
          />

          <Button
            name="Sort alphabetically"
            onClick={this.sortAlphabetically}
          />

          <Button
            name="Sort by length"
            onClick={this.sortByLength}
          />

          <Button
            name="Reset"
            onClick={this.reset}
          />
        </div>

        <p>
          Min length of words :
        </p>

        <LengthSelect
          range={range}
          onChange={this.changeMinLength}
          value={minLength}
        />
      </>
    );
  }
}

Content.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
