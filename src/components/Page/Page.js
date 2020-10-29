import React from 'react';
import PropTypes from 'prop-types';

import { GoodsList } from '../GoodsList';
import { Buttons } from '../Buttons';

export class Page extends React.PureComponent {
  state = {
    goods: this.props.goods,
    isListReversed: false,
    sortBy: '',
    lengthLimit: 1,
  }

  reverseList = () => {
    this.setState(state => ({
      isListReversed: !state.isListReversed,
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      isListReversed: false,
      sortBy: 'name',
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      isListReversed: false,
      sortBy: 'length',
    }));
  }

  selectByLength = (event) => {
    this.setState({
      lengthLimit: event.target.value,
    });
  }

  reset = () => {
    this.setState({
      isListReversed: false,
      sortBy: '',
      lengthLimit: 1,
    });
  }

  render() {
    const {
      lengthLimit,
      sortBy,
      isListReversed,
    } = this.state;

    const visibleGoods = this.state.goods.filter(
      good => (good.name.length >= lengthLimit),
    );

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1[sortBy].localeCompare(good2[sortBy]);

        case 'length':
          return good1.name.length - good2.name.length;

        default:
          return 0;
      }
    });

    if (isListReversed) {
      visibleGoods.reverse();
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        <h1 className="card-header text-center">Goods</h1>
        <GoodsList
          goods={visibleGoods}
        />

        <Buttons
          reverseList={this.reverseList}
          sortByName={this.sortByName}
          sortByLength={this.sortByLength}
          selectByLength={this.selectByLength}
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
