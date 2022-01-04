import React from 'react';
import './GoodsList.scss';

type Props = {
  goodsFromServer: string[],
};

type SortStyle = 'none' | 'name' | 'length';

type State = {
  showGoods: boolean,
  isReversed: boolean,
  goodsLength: number,
  sortBy: string,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    showGoods: false,
    isReversed: false,
    goodsLength: 1,
    sortBy: '',
  };

  showGoodsList = () => {
    this.setState(state => ({
      showGoods: !state.showGoods,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handlerSorter = (sortStyle: SortStyle) => {
    this.setState({ sortBy: sortStyle });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      goodsLength: 1,
      sortBy: '',
    });
  };

  render() {
    const { goodsFromServer: goods } = this.props;
    const {
      showGoods,
      isReversed,
      goodsLength,
      sortBy,
    } = this.state;

    const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const visibleGoods = goods.filter(good => good.length >= goodsLength);

    visibleGoods.sort((good1, good2) => {
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
      visibleGoods.reverse();
    }

    return (
      <div className="goods">
        <h1 className="goods__title">Goods</h1>
        {!showGoods && (
          <button type="button" className="btn" onClick={this.showGoodsList}>
            Start
          </button>
        )}
        {showGoods && (
          <>
            <label htmlFor="goods-length">
              Sort
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
            <ul className="list">
              {visibleGoods.map(good => (
                <li
                  className="list__item"
                  key={good}
                  title={good}
                >
                  {good}
                </li>
              ))}
            </ul>
            <div className="btns">
              <button type="button" className="btn" onClick={this.reverse}>
                Reverse
              </button>

              <button type="button" className="btn" onClick={() => this.handlerSorter('name')}>
                Sort by name
              </button>

              <button type="button" className="btn" onClick={() => this.handlerSorter('length')}>
                Sort by length
              </button>

              <button type="button" className="btn" onClick={this.reset}>
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
