import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsFromServer: string[],
};

type State = {
  goods: string[],
  showGoods: boolean,
  isReversed: boolean,
  sortBy: string,
  goodsLength: number,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goodsFromServer,
    showGoods: false,
    isReversed: false,
    sortBy: '',
    goodsLength: 1,
  };

  showGoods = () => {
    this.setState(state => ({
      showGoods: !state.showGoods,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      goods: this.props.goodsFromServer,
      isReversed: false,
      sortBy: '',
      goodsLength: 1,
    });
  };

  render() {
    const {
      goods,
      showGoods,
      isReversed,
      sortBy,
      goodsLength,
    } = this.state;

    const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const goodsList = goods.filter(
      good => good.length >= goodsLength,
    );

    goodsList.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <div className="goods">
        <h1 className="goods__title">Goods</h1>

        {!showGoods && (
          <button
            type="button"
            className="goods__button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}

        {showGoods && (
          <>
            <label htmlFor="goods-length">
              Show
              {' '}
              <select
                id="goods-length"
                value={goodsLength}
                className="goods__select"
                onChange={(event) => {
                  this.setState({
                    goodsLength: +event.target.value,
                  });
                }}
              >
                {lengths.map(length => (
                  <option
                    key={length}
                    value={length}
                  >
                    {length}
                  </option>
                ))}
              </select>
              {' '}
              letter goods
            </label>

            <ul className="goods__list">
              {goodsList.map(good => (
                <li key={good} className="goods__list-item">
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="goods__button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className="goods__button"
              onClick={this.sortByName}
            >
              Sort by name
            </button>
            <button
              type="button"
              className="goods__button"
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
          </>
        )}
      </div>
    );
  }
}
