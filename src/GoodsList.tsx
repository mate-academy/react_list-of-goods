import classNames from 'classnames';
import React from 'react';

type Props = {
  goods: string[];
};

type State = {
  reverse: boolean;
  sortBy: string;
  maxLength: number;
};

enum Order{
  alphabet = 'alphabet',
  length = 'length',
}

export class GoodsList extends React.Component<Props, State> {
  state = {
    reverse: false,
    sortBy: '',
    maxLength: 10,
  };

  changeOrder = () => {
    this.setState(state => {
      return { reverse: !state.reverse };
    });
  };

  sortBy = (order: Order) => {
    this.setState({ sortBy: order });
  };

  render() {
    const { reverse, sortBy, maxLength } = this.state;
    const visibleGoods = [...this.props.goods].filter(item => item.length <= maxLength);

    visibleGoods.sort((item1, item2) => {
      switch (sortBy) {
        case 'alphabet':
          return item1.localeCompare(item2);

        case 'length':
          return item1.length - item2.length;

        default:
          return 0;
      }
    });

    if (reverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="goods">
        <ul className="goods-list">
          {visibleGoods.map(item => {
            return (
              <li
                key="item"
                className="goods-list__item"
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className="goods__buttons">
          <h2 className="goods__subtitle">Order: </h2>
          <button
            type="button"
            onClick={this.changeOrder}
            className={classNames('goods__button', {
              'goods__button--reverse': reverse,
            })}
          >
            {reverse ? 'Reset' : 'Reverse'}
          </button>

          <h2 className="goods__subtitle">Sort by: </h2>
          <button
            type="button"
            className={classNames('goods__button', {
              'goods__button--active': sortBy === Order.alphabet,
            })}
            onClick={() => {
              this.sortBy(Order.alphabet);
            }}
          >
            Alphabet
          </button>

          <button
            type="button"
            className={classNames('goods__button', {
              'goods__button--active': sortBy === Order.length,
            })}
            onClick={() => {
              this.sortBy(Order.length);
            }}
          >
            Length
          </button>

          <h2 className="goods__subtitle">Words length: </h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.forceUpdate();
            }}
          >
            <select
              name="max-length"
              id="max-length"
              value={maxLength}
              onChange={(event) => this.setState({ maxLength: +event.target.value })}
              className="goods__length-input"
            >

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>

            </select>
          </form>
        </div>
      </div>
    );
  }
}
