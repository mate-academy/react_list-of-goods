import React from 'react';

import './GoodList.scss';

enum TypeSort {
  Name = 'name',
  Length = 'nameLength',
  Default = '',
}

type Props = {
  goods: string[],
};

type State = {
  isReversed: boolean;
  sortBy: TypeSort;
  goodLength: number;
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: TypeSort.Default,
    goodLength: 0,
  };

  availLengthOfSelect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortBy: TypeSort.Default,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortFunction = (sortBy: TypeSort) => {
    this.setState(() => ({
      sortBy,
    }));
  };

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      goodLength: +value,
    });
  };

  preparedGoodsList = () => {
    const { goods } = this.props;
    const { isReversed, sortBy, goodLength } = this.state;

    const visibleGoods = goods.filter(good => good.length > goodLength);

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

    return visibleGoods;
  };

  render() {
    const { goodLength } = this.state;
    const visibleGoods = this.preparedGoodsList();

    return (
      <article className="goods">
        <select
          className="goods__select"
          name="itemLength"
          value={goodLength}
          onChange={this.handleChange}
        >
          {
            this.availLengthOfSelect.map(item => (
              <option
                key={item}
                value={item}
              >
                {item ? `Good length more than: ${item}` : 'Choose good length'}
              </option>
            ))
          }
        </select>
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
            onClick={() => this.sortFunction(TypeSort.Name)}
          >
            Sort &lsquo;a-z&rsquo;
          </button>
          <button
            type="button"
            className="goods__buttons-item"
            onClick={() => this.sortFunction(TypeSort.Length)}
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
