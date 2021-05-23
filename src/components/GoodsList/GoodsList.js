import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './GoodsList.css';

export class GoodsList extends Component {
  state ={
    hidden: true,
    reverse: false,
    sortBy: '',
    goodsSelector: 1,
  }

  hideButton = () => {
    this.setState({
      hidden: false,
    });
  }

  reverseGoods = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  sortGoods = () => {
    this.setState(state => ({
      sort: !state.sort,
    }));
  }

  resetGoods = () => {
    this.setState({
      reverse: false,
      sortBy: '',
      goodsSelector: 1,
    });
  }

  render() {
    const { goods } = this.props;
    const { hidden, reverse, sortBy, goodsSelector } = this.state;
    const modifiedGoods = goods.filter(good => good.length >= goodsSelector);

    modifiedGoods.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alphabet':
          return goodA.localeCompare(goodB);

        case 'length':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (reverse) {
      modifiedGoods.reverse();
    }

    return (
      <>
        <button
          type="button"
          className={classNames('GoodsList__toggleButton', {
            'GoodsList__toggleButton--hide': !hidden,
          })}
          onClick={this.hideButton}
        >
          Start
        </button>
        <div
          className={classNames('GoodsList', {
            'GoodsList--hide': hidden,
          })}
        >
          <ul>
            {modifiedGoods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="GoodsList__modifieButton"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>
          <button
            type="button"
            className="GoodsList__modifieButton"
            onClick={() => {
              this.setState({
                sortBy: 'alphabet',
              });
            }}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="GoodsList__modifieButton"
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
            className="GoodsList__modifieButton"
            onClick={this.resetGoods}
          >
            Reset
          </button>
          <select
            className="GoodsList__modifieButton"
            defaultValue={goodsSelector}
            onChange={({ target }) => {
              this.setState({
                goodsSelector: target.value,
              });
            }}
            value={goodsSelector}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
