import React from 'react';
import classNames from 'classnames';

import './GoodList.scss';

type Props = {
  goodsFromServer: string[],
};

type State = {
  goodsList: string[],
  showList: boolean,
  isReverse: boolean,
  sortBy: string,
  countLetter: number,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goodsList: this.props.goodsFromServer,
    showList: false,
    isReverse: false,
    sortBy: '',
    countLetter: 1,
  };

  showList = () => {
    this.setState(state => ({ showList: !state.showList }));
  };

  reverseList = () => {
    this.setState(state => ({ isReverse: !state.isReverse }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      goodsList: this.props.goodsFromServer,
      countLetter: 1,
    });
  };

  changeLength = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      countLetter: +event.target.value,
      goodsList: [...this.props.goodsFromServer].filter(word => word.length >= +event.target.value),
    });
  };

  render() {
    const {
      showList,
      goodsList,
      isReverse,
      sortBy,
      countLetter,
    } = this.state;

    const goods = [...goodsList];

    goods.sort((prev, next) => {
      switch (sortBy) {
        case 'length':
          return prev.length - next.length;

        case 'name':
          return prev.localeCompare(next);

        default:
          return 0;
      }
    });

    if (isReverse) {
      goods.reverse();
    }

    return (
      <div className="goods">
        <h1 className="goods__title">Goods:</h1>

        {!showList && (
          <button
            type="button"
            className="goods__button"
            onClick={this.showList}
          >
            Show List
          </button>
        )}

        {showList && (
          <>
            <ul className="goods__list">
              {goods.map(good => (
                <li key={good} className="goods__item">
                  {good}
                </li>
              ))}
            </ul>

            <div className="goods__buttons">
              <button
                type="button"
                className={classNames('goods__button', { 'goods__button--active': isReverse })}
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                type="button"
                className={classNames('goods__button', { 'goods__button--active': sortBy === 'name' })}
                onClick={this.sortByName}
              >
                Sort by name
              </button>
              <button
                type="button"
                className={classNames('goods__button', { 'goods__button--active': sortBy === 'length' })}
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="goods__button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                className="goods__button"
                onClick={this.showList}
              >
                Hide
              </button>
            </div>

            <label htmlFor="countLetter">
              <input
                type="range"
                id="countLetter"
                min="1"
                max="10"
                value={countLetter}
                onChange={this.changeLength}
              />
              <br />
              <p className="countLetter">{`length: ${countLetter}`}</p>
            </label>
          </>
        )}
      </div>
    );
  }
}
