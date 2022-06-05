import React from 'react';
import './GoodsList.css';

type State = {
  initialGoods: string[],
};

type Props = {
  goods: string[]
};

export class GoodsList extends React.PureComponent<Props, State> {
  state = {
    initialGoods: this.props.goods,
  };

  reverseGoods = () => {
    this.setState(state => ({
      initialGoods: [...state.initialGoods].reverse(),
    }));
  };

  sort = () => {
    this.setState(state => ({
      initialGoods: [...state.initialGoods].sort((g1, g2) => (

        g1.localeCompare(g2)
      )),
    }));
  };

  reset = () => {
    this.setState(
      { initialGoods: this.props.goods },
    );
  };

  sortByLength = () => {
    this.setState(state => ({
      initialGoods: [...state.initialGoods].sort((g1, g2) => (
        g1.length - g2.length
      )),
    }));
  };

  render() {
    const { initialGoods } = this.state;

    return (
      <div className="box">
        <h1
          className="title"
        >
          Goods
        </h1>
        <ul className="list">
          {initialGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <div>
          <button
            className="button is-link"
            type="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            className="button is-link"
            type="button"
            onClick={this.sort}
          >
            Sort alphabetically
          </button>

          <button
            className="button is-link"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            className="button is-link"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}
