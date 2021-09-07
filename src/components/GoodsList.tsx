import React from 'react';

import './GoodList.scss';

enum TypeSort {
  name = 'name',
  length = 'nameLength',
  default = 0,
}

type Props = {
  goods: string[],
};

type State = {
  isReversed: boolean;
  sortBy: TypeSort;
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: TypeSort.default,
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortBy: TypeSort.default,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState(() => ({
      sortBy: TypeSort.name,
    }));
  };

  sortByNameLength = () => {
    this.setState(() => ({
      sortBy: TypeSort.length,
    }));
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'name':
          return g1.localeCompare(g2);

        case 'nameLength':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <article className="goods">
        <ul className="goods__list">
          {visibleGoods.map(good => (
            <li
              key={good}
              className="goods__item"
            >
              {good}
            </li>
          ))}
        </ul>
        <div className="goods__buttons">
          <button
            type="button"
            className="goods__buttons-item"
            onClick={this.reverse}
          >
            Reversed
          </button>
          <button
            type="button"
            className="goods__buttons-item"
            onClick={this.sortByName}
          >
            Sort &lsquo;a-z&rsquo;
          </button>
          <button
            type="button"
            className="goods__buttons-item"
            onClick={this.sortByNameLength}
          >
            Sort by name length
          </button>
          <button
            type="button"
            className="goods__buttons-item"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </article>
    );
  }
}
