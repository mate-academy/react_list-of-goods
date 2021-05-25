import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NIL as NIL_UUID } from 'uuid';
import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    isReversed: false,
    sortBy: '',
    goodsSelector: 1,
  }

  reverseGoods = () => {
    this.setState(({ isReversed }) => ({
      isReversed: !isReversed,
    }));
  }

  resetGoods = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      goodsSelector: 1,
    });
  }

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy, goodsSelector } = this.state;
    const visibleGoods = goods.filter(good => good.length >= goodsSelector);

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <div className="GoodsList">
          <ul>
            {visibleGoods.map(good => (<li key={good}>{good}</li>
            ))}
          </ul>
          <button
            type="button"
            onClick={this.reverseGoods}
            className={classNames('button', { buttonActive: isReversed })}
          >
            Reverse
          </button>
          <button
            type="button"
            className={classNames('button', {
              buttonActive: sortBy === 'alphabet',
            })}
            onClick={() => {
              this.setState({
                sortBy: 'alphabet',
              });
            }}
          >
            Sort by alphabet
          </button>
          <button
            type="button"
            className={classNames('button', {
              buttonActive: sortBy === 'length',
            })}
            onClick={() => {
              this.setState({
                sortBy: 'length',
              });
            }}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="button button__hover"
            onClick={this.resetGoods}
          >
            Reset
          </button>
          <select
            className="button button__hover"
            defaultValue={goodsSelector}
            onChange={({ target }) => {
              this.setState({
                goodsSelector: target.value,
              });
            }}
            value={goodsSelector}
          >
            {new Array(10).fill(0).map((_, i) => (
              <option key={NIL_UUID}>{i + 1}</option>
            ))}
          </select>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
