import React from 'react';

type Sort = 'length' | 'alphabet' | 'default';

type Props = {
  goods: string[],
};

type State = {
  isReverse: boolean,
  sortedBy: Sort,
  lengthLimit: number,
};

export class GoodsList extends React.Component<Props, State> {
  state: Readonly<State> = {
    isReverse: false,
    sortedBy: 'default',
    lengthLimit: 1,
  };

  reverseHandler = () => {
    this.setState(prev => ({ isReverse: !prev.isReverse }));
  };

  aplhSortHandler = () => this.sortSwitch('alphabet');

  lengthSortHandler = () => this.sortSwitch('length');

  resetHandler = () => {
    this.setState({ isReverse: false, sortedBy: 'default', lengthLimit: 1 });
  };

  selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ lengthLimit: +event.target.value });
  };

  sortSwitch(currentSort: Sort) {
    this.setState(prev => {
      if (prev.sortedBy === currentSort) {
        return { sortedBy: 'default' };
      }

      return { sortedBy: currentSort };
    });
  }

  render(): React.ReactNode {
    const { isReverse, sortedBy, lengthLimit } = this.state;
    const preparedList = this.props.goods
      .filter(good => good.length >= lengthLimit);

    preparedList.sort((g1, g2) => {
      switch (sortedBy) {
        case 'alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      preparedList.reverse();
    }

    return (
      <div className="columns">
        <div
          className="
            is-flex
            is-flex-direction-column
            mr-6
            column is-4 is-offset-8
          "
        >
          <button
            type="button"
            onClick={this.resetHandler}
            className="button mb-2 is-danger"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.reverseHandler}
            className="button mb-2 is-light"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.aplhSortHandler}
            className="button mb-2 is-light"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.lengthSortHandler}
            className="button mb-2 is-light"
          >
            Sort by length
          </button>

          <div>
            <span>Length &gt;= </span>

            <div className="select">
              <select
                value={lengthLimit}
                name="select"
                onChange={this.selectHandler}
                defaultValue={lengthLimit}
              >
                { Array.from(Array(11).keys()).slice(1).map(num => (
                  <option
                    key={num}
                    value={num}
                  >
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <ul className="column">
          {preparedList.map(good => (
            <li
              key={good}
              className="
                panel-block
                subtitle
                is-5
              "
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
