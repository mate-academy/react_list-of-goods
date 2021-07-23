import React from 'react';
import PropTypes, { string } from 'prop-types';
import './GoodsList.css';
import { Button } from '../Button';
import { Select } from '../Select';
import { Good } from '../Good';

export class GoodsList extends React.Component {
  state = {
    sortedBy: null,
    goods: this.props.goods,
    minGoodLength: 1,
    selectRange: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  doReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortGoods = (goodsCopy, sortedBy) => (
    goodsCopy.sort((good1, good2) => {
      switch (sortedBy) {
        case 'alphabet':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    })
  )

  sortByAlphabet = () => {
    this.setState({ sortedBy: 'alphabet' });
    this.setState(prevState => ({
      goods: this.sortGoods([...prevState.goods], prevState.sortedBy),
    }));
  }

  sortByLength = () => {
    this.setState({ sortedBy: 'length' });
    this.setState(prevState => ({
      goods: this.sortGoods([...prevState.goods], prevState.sortedBy),
    }));
  }

  reset = () => {
    this.setState({
      sortedBy: null,
      goods: this.props.goods,
      minGoodLength: 1,
    });
  }

  selectLength = (event) => {
    const { goods } = this.props;

    this.setState({
      minGoodLength: event.target.value,
      goods: goods.filter(good => good.length >= event.target.value),
    });
  }

  render() {
    const {
      goods,
      minGoodLength,
      selectRange,
    } = this.state;

    return (
      <div className="goods-list">
        <ul className="list-group">
          {goods.map(good => (
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
