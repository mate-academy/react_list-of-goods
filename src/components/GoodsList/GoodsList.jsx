import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export class GoodsList extends React.PureComponent {
  state = {
    isReversed: false,
    sortBy: null,
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortBy = (value) => {
    this.setState({
      sortBy: value,
    });
  }

  reset = () => {
    this.setState(state => ({
      sortBy: null,
      isReversed: false,
    }));
  }

  render() {
    const currentGoods = [...this.props.goods];

    currentGoods.sort((goodA, goodB) => {
      switch (this.state.sortBy) {
        case 'length':
          return goodA.length - goodB.length;

        case 'alphabet':
          return goodA.localeCompare(goodB);

        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      currentGoods.reverse();
    }

    return (
      <>
        <h1>GoodsList:</h1>
        <ul>
          {currentGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <Button
          onClick={this.reverse}
          text="Reverse"
        />

        <Button
          onClick={() => this.sortBy('alphabet')}
          text="Sort alphabetically"
        />

        <Button
          onClick={this.reset}
          text="Reset"
        />

        <Button
          onClick={() => this.sortBy('length')}
          text="Sort by length"
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
