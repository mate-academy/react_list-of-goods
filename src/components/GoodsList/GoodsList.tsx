import React from 'react';

interface State {
  goods: string[];
  initialGoods: string[];
  filterNumber: number;
  isReversed: boolean;
}

interface Props {
  goods: string[],
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: [...this.props.goods],
    initialGoods: [...this.props.goods],
    filterNumber: Infinity,
    isReversed: false,
  };

  reverce = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlph = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const {
      goods,
      initialGoods,
      isReversed,
      filterNumber,
    } = this.state;

    const arrOfLength
      = new Set([...initialGoods]
        .sort((a, b) => a.length - b.length)
        .map(el => el.length));

    const arrForSelectFilter = Array.from(arrOfLength).reverse();
    const visibleGoods = goods.filter(good => good.length <= filterNumber);

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <h1 className="
          title
          is-1
          has-text-warning
          has-text-centered"
        >
          List of Goods
        </h1>

        <div
          className="
          buttons-container
          is-flex
          is-justify-content-space-between
          pb-5"
        >
          <button
            type="button"
            className="
              button
              is-danger
              is-rounded"
            onClick={this.reverce}
          >
            Reverse
          </button>

          <button
            type="button"
            className="
              button
              is-danger
              is-rounded"
            onClick={this.sortAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="
              button
              is-danger
              is-rounded"
            onClick={() => {
              this.setState({
                goods: initialGoods,
                filterNumber: arrForSelectFilter[0],
              });
            }}
          >
            Reset
          </button>

          <button
            type="button"
            className="
              button
              is-danger
              is-rounded"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <select
            name="filter-length"
            id="filterLength"
            value={filterNumber}
            onChange={(event) => {
              this.setState({
                filterNumber: +(event.currentTarget.value),
              });
            }}
          >
            {arrForSelectFilter.map(el => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
        </div>

        <ul
          className="
          is-flex
          is-flex-direction-column
          is-align-items-center"
        >
          {visibleGoods.map((good: string) => (
            <li
              key={good}
              className="
              has-text-warning
              is-size-4"
            >
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
