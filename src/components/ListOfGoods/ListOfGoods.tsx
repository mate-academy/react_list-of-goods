import React from 'react';
import './ListOfGoods.scss';

type Props = {
  goodsFromServer: string[]
};

type State = {
  goods: string[],
  isShow: boolean,
  isReversed: boolean,
  sortBy: string,
  limitLength: number,
};

export class ListOfGoods extends React.Component<Props, State> {
  state = {
    goods: this.props.goodsFromServer,
    isShow: false,
    isReversed: false,
    sortBy: '',
    limitLength: 1,
  };

  startShow = () => {
    this.setState(state => ({
      isShow: !state.isShow,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAbc = () => {
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
      limitLength: 1,
    });
  };

  render() {
    const {
      goods,
      isShow,
      isReversed,
      sortBy,
      limitLength,
    } = this.state;

    const goodsLengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const goodsList = goods.filter(good => good.length >= limitLength);

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

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <>
        {!isShow && (
          <button
            type="button"
            className="button"
            onClick={this.startShow}
          >
            Show goods
          </button>
        )}
        {isShow && (
          <div className="goods">
            <ul className="goods__list">
              {goodsList.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <div className="goods__buttons">
              <label htmlFor="good">
                Show only goods having more than
                {' '}
                <select
                  className="goods__select"
                  name="good"
                  id="good"
                  onChange={(event) => {
                    this.setState({
                      limitLength: +event.target.value,
                    });
                  }}
                >
                  {goodsLengths.map(length => (
                    <option value={length}>{length}</option>
                  ))}
                </select>
                {' '}
                letter(s).
              </label>
              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortByAbc}
              >
                Name
              </button>
              <button
                type="button"
                className="button"
                onClick={this.sortByLength}
              >
                Length
              </button>
              <button
                type="button"
                className="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
