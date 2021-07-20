import React from 'react';
import PropTypes, { string } from 'prop-types';
import './GoodsList.css';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';
import { Good } from '../Good/Good';

export class GoodsList extends React.Component {
  state = {
    shouldReverse: false,
    sortBy: null,
    goods: this.props.goods,
    minGoodLength: 1,
    selectRange: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  doReverse = () => {
    this.setState(prevState => ({
      shouldReverse: !prevState.shouldReverse,
    }));
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      shouldReverse: false,
      sortBy: null,
      minGoodLength: 1,
    });
  }

  selectLength = (event) => {
    this.setState({ minGoodLength: event.target.value });
  }

  filterGoods = (goods, minGoodLength) => (
    goods.filter(good => good.length >= minGoodLength)
  )

  sortGoods = (goodsCopy, sortBy) => {
    goodsCopy.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });
  }

  reverseGoods = (goodsCopy, shouldReverse) => {
    if (shouldReverse) {
      goodsCopy.reverse();
    }
  }

  render() {
    const {
      shouldReverse,
      goods,
      sortBy,
      minGoodLength,
      selectRange,
    } = this.state;
    const goodsToShow = this.filterGoods(goods, minGoodLength);

    this.sortGoods(goodsToShow, sortBy);
    this.reverseGoods(goodsToShow, shouldReverse);

    return (
      <div className="goods-list">
        <ul className="list-group">
          {goodsToShow.map(good => (
            <li
              className="list-group-item list-group-item-info"
              key={Math.random()}
            >
              <Good good={good} />
            </li>
          ))}
        </ul>
        <div className="btn-group">
          <Button
            innerText="Reverse"
            action={this.doReverse}
          />
          <Button
            innerText="Sort alphabetically"
            action={this.sortByAlphabet}
          />
          <Button
            innerText="Reset"
            action={this.reset}
          />
          <Button
            innerText="Sort by length"
            action={this.sortByLength}
          />
        </div>
        <Select
          value={minGoodLength}
          action={this.selectLength}
          range={selectRange}
        />
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};
