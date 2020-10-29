import React from 'react';
import PropTypes from 'prop-types';

import { GoodsList } from '../GoodsList';
import { Buttons } from '../Buttons';

function sortGoods(goodsList, sortBy) {
  return goodsList.sort((good1, good2) => {
    switch (sortBy) {
      case 'name':
        return good1[sortBy].localeCompare(good2[sortBy]);

      case 'length':
        return good1.name.length - good2.name.length;

      default:
        return 0;
    }
  });
}

export class Page extends React.PureComponent {
  state = {
    goods: this.props.goods,
    lengthLimit: 1,
    sortBy: null,
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByName = () => {
    if (this.state.sortBy !== 'name') {
      this.setState(state => ({
        sortBy: 'name',
      }));
    }

    this.setState(state => ({
      goods: sortGoods([...state.goods], state.sortBy),
    }));
  }

  sortByLength = () => {
    if (this.state.sortBy !== 'length') {
      this.setState(state => ({
        sortBy: 'length',
      }));
    }

    this.setState(state => ({
      goods: sortGoods([...state.goods], state.sortBy),
    }));
  }

  selectLengthLimit = (event) => {
    this.setState({
      lengthLimit: event.target.value,
    });
  }

  selectByLength = () => {
    const { goods, lengthLimit } = this.state;

    return goods.filter(good => good.name.length >= lengthLimit);
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      lengthLimit: 1,
      sortBy: null,
    });
  }

  render() {
    const { lengthLimit } = this.state;

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        <h1 className="card-header text-center">Goods</h1>
        <GoodsList
          goods={this.selectByLength()}
        />

        <Buttons
          reverseList={this.reverseList}
          sortByName={this.sortByName}
          sortByLength={this.sortByLength}
          selectByLength={this.selectLengthLimit}
          reset={this.reset}
          numbers={numbers}
          lengthLimit={lengthLimit}
        />
      </div>
    );
  }
}

Page.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
