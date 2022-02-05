import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[];
};

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
  lengthWord: number,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goods,
    isVisible: false,
    isReversed: false,
    sortBy: '',
    lengthWord: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverseElements = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAbc = () => {
    this.setState({ sortBy: 'abc', isReversed: false });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length', isReversed: false });
  };

  reset = () => {
    this.setState({ sortBy: '', isReversed: false, lengthWord: 1 });
  };

  render() {
    const {
      isVisible, goods, isReversed, sortBy, lengthWord,
    } = this.state;

    const goodList = goods.filter(good => good.length >= lengthWord);

    goodList.sort((goodPrev, goodNext) => {
      switch (sortBy) {
        case 'abc':
          return goodPrev.localeCompare(goodNext);
        case 'length':
          return goodPrev.length - goodNext.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodList.reverse();
    }

    return (
      <div className="Goods">

        <div className="Goods__list">
          {
            isVisible
            && (
              <ul className="Goods__list__items">
                {goodList.map(
                  good => <li className="Goods__list__item" key={Math.floor(Math.random() * 10000000)}>{good}</li>,
                )}
              </ul>
            )
          }
        </div>

        <div className="Goods__buttons">
          {
            !isVisible && (
              <button
                type="button"
                className="Button"
                onClick={this.start}
              >
                Start
              </button>
            )
          }
          {
            isVisible && (
              <>
                <div className="Goods__select__wrapper">
                  <p>Words length:</p>
                  <select
                    className="Goods__select"
                    name="length"
                    value={this.state.lengthWord}
                    onChange={(event) => {
                      this.setState({ lengthWord: +event.target.value });
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                      item => <option key={item}>{item}</option>,
                    )}
                  </select>
                </div>
                <button
                  type="button"
                  className="Button"
                  onClick={this.reverseElements}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="Button"
                  onClick={this.sortByAbc}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="Button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className="Button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </>
            )
          }
        </div>
      </div>
    );
  }
}
