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
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    goods: this.props.goods,
    isVisible: false,
    isReversed: false,
    sortBy: '',
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
    this.setState({ sortBy: 'abc' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ sortBy: '', isReversed: false });
  };

  render() {
    const {
      isVisible, goods, isReversed, sortBy,
    } = this.state;

    const goodList = [...goods];

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
                  onClick={this.reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="Button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
              </>
            )
          }
        </div>
      </div>
    );
  }
}
