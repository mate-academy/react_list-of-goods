import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Select from '../Select/Select';

class GoodsList extends React.Component {
  state = {
    sortBy: 'id',
    isReverse: false,
    maxGoodsLength: 1,
    isCleanActive: false,
  }

  takeChildrenState = (steteResult) => {
    this.setState({ maxGoodsLength: steteResult });
  }

  reverseGoods = () => {
    this.setState(state => ({ isReverse: !state.isReverse }));
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortByABC = () => {
    this.setState({ sortBy: 'ABC' });
  }

  clearGoods = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      maxGoodsLength: 1,
      isCleanActive: true,
    });
  }

  render() {
    const { allGoods } = this.props;

    const newArrayOfGoods = allGoods.filter(goods => (
      goods.length > this.state.maxGoodsLength
    ));

    newArrayOfGoods.sort((firsGoods, nextGoods) => {
      switch (this.state.sortBy) {
        case 'length':
          return firsGoods.length - nextGoods.length;
        case 'ABC':
          return firsGoods.localeCompare(nextGoods);
        default: return 0;
      }
    });

    if (this.state.isReverse) {
      newArrayOfGoods.reverse();
    }

    return (
      <>
        <ul>
          {newArrayOfGoods.map(good => <li key={good}>{good}</li>)}
        </ul>
        <Button action={this.sortByLength} text="Sort by length" />
        <Button action={this.sortByABC} text="Sort by Name" />
        <Button action={this.clearGoods} text="Clear" />
        <Button action={this.reverseGoods} text="Reverse" />
        <Select
          maxGoodsLength={this.state.maxGoodsLength}
          takeChildrenState={this.takeChildrenState}
          clearGoods={this.clearGoods}
          isCleanActive={this.state.isCleanActive}
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  allGoods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
