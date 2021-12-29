import React from 'react';

import './GoodsList.scss';

type Props = {
  goodsFromServer: string[],
};

type State = {
  goods: string[]
  isVisibility: boolean,
  isReverse: boolean,
  sortBy: string,
  goodsLength: number,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goodsFromServer,
    isVisibility: false,
    isReverse: false,
    sortBy: '',
    goodsLength: 1,
  };

  isVisibility = () => {
    this.setState(state => (
      {
        isVisibility: !state.isVisibility,
      }
    ));
  };

  reverse = () => {
    this.setState(state => (
      {
        isReverse: !state.isReverse,
      }
    ));
  };

  reset = () => {
    this.setState({
      goods: this.props.goodsFromServer,
      isReverse: false,
      sortBy: '',
      goodsLength: 1,
    });
  };

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const {
      goods,
      isVisibility,
      isReverse,
      sortBy,
      goodsLength,
    } = this.state;

    const goodsList = [...goods].filter(good => good.length >= goodsLength);

    goodsList.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      goodsList.reverse();
    }

    return (
      <div
        className="GoodsList"
      >
        <h2>
          Goods
        </h2>
        {!isVisibility
          && (
            <button
              type="button"
              onClick={this.isVisibility}
              className="GoodsList__button GoodsList__button--m-b"
            >
              Start
            </button>
          )}
        {isVisibility
          && (
            <>
              <div
                className="GoodsList__select"
              >
                Goods length
                {' '}
                <select
                  name="GoodsLength"
                  id="GoodsLength"
                  className="GoodsList__button"
                  value={goodsLength}
                  onChange={(event) => {
                    this.setState({
                      goodsLength: +event.target.value,
                    });
                  }}
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
              </div>
              <ul className="GoodsList__list">
                {goodsList.map(item => (
                  <li
                    key={item}
                    className="GoodsList__item"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="GoodsList__buttons"
              >
                <button
                  type="button"
                  className="GoodsList__button"
                  onClick={this.isVisibility}
                >
                  Hide
                </button>
                <button
                  type="button"
                  className="GoodsList__button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                  className="GoodsList__button"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByName}
                  className="GoodsList__button"
                >
                  Sort by name
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="GoodsList__button"
                >
                  Sort by lenght
                </button>
              </div>
            </>
          )}
      </div>
    );
  }
}
