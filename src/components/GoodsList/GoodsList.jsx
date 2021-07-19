import React from 'react';
import PropTypes, { string } from 'prop-types';
import './GoodsList.css';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

export class GoodsList extends React.Component {
  state = {
    shouldReverse: false,
    sortBy: null,
    goods: this.props.goods,
    minGoodLength: 1,
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

  render() {
    const {
      shouldReverse,
      goods,
      sortBy,
      minGoodLength,
    } = this.state;
    const goodsCopy = goods.filter(good => good.length >= minGoodLength);

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

    if (shouldReverse) {
      goodsCopy.reverse();
    }

    return (
      <div className="goods-list">
        <ul className="list-group">
          {goodsCopy.map(good => (
            <li
              className="list-group-item list-group-item-info"
              key={Math.random()}
            >
              {good}
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
        <Select value={minGoodLength} action={this.selectLength} />
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};
