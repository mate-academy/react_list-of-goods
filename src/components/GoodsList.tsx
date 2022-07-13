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

  handleReverseBtn = () => {
    this.setState(prev => ({ isReverse: !prev.isReverse }));
  };

  handleAlphtSortBtn = () => this.sortSwitch('alphabet');

  handleLengthtSortBtn = () => this.sortSwitch('length');

  handleResetBtn = () => {
    this.setState({ isReverse: false, sortedBy: 'default', lengthLimit: 1 });
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

  prepareList() {
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

    return preparedList;
  }

  render(): React.ReactNode {
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
            onClick={this.handleResetBtn}
            className="button mb-2 is-danger"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.handleReverseBtn}
            className="button mb-2 is-light"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.handleAlphtSortBtn}
            className="button mb-2 is-light"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.handleLengthtSortBtn}
            className="button mb-2 is-light"
          >
            Sort by length
          </button>

          <div>
            <span>Length &gt;= </span>

            <div className="select">
              <select
                value={this.state.lengthLimit}
                name="select"
                onChange={this.handleSelectChange}
                defaultValue={this.state.lengthLimit}
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
          {this.prepareList().map(good => (
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
