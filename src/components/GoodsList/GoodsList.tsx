import React from 'react';

interface State {
  goods: string[];
  initialGoods: string[];
}

interface Props {
  goods: string[],
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: [...this.props.goods],
    initialGoods: [...this.props.goods],
  };

  reverce = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
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
    const { goods, initialGoods } = this.state;

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
              this.setState({ goods: initialGoods });
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
        </div>

        <ul
          className="
          is-flex
          is-flex-direction-column
          is-align-items-center"
        >
          {goods.map((good: string) => (
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
