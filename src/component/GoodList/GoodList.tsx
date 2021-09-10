import React from 'react';

enum SortType {
  alphabet = 'alphabet',
  length = 'length',
  default = '',
}

type Props = {
  goods: string[];
};

type State = {
  isReverse: boolean;
  sortBy: SortType | undefined;
  minLength: number;
};

export class GoodList extends React.Component<Props, State> {
  state = {
    isReverse: false,
    sortBy: SortType.default,
    minLength: 1,
  };

  reverse = () => {
    this.setState(state => {
      return { isReverse: !state.isReverse };
    });
  };

  sortBy = (rule: SortType) => {
    this.setState({
      sortBy: rule,
    });
  };

  changeVisibleGoods = () => {
    const {
      isReverse,
      sortBy,
      minLength,
    } = this.state;

    const visibleGoods = [...this.props.goods]
      .filter(item => item.length >= minLength);

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render() {
    const visibleGoods = this.changeVisibleGoods();
    const { isReverse } = this.state;

    return (
      <div className="goods">
        <ul className="goods__list">
          {visibleGoods.map((item) => {
            return (
              <li
                key={item}
                className="goods__item"
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className="goods__buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="goods__reverse"
          >
            {isReverse ? 'reset' : 'reverse'}
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortBy(SortType.alphabet);
            }}
            className="goods__sortBy"
          >
            sort by alphabet
          </button>

          <button
            type="button"
            onClick={() => {
              this.sortBy(SortType.length);
            }}
            className="goods__sortBy"
          >
            sort by length
          </button>
        </div>
      </div>
    );
  }
}
