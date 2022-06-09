import React from 'react';
import './List.scss';

type State = {
  initialListOfGoods: string[],
};

type Props = {
  goods: string[]
};

export class List extends React.PureComponent<Props, State> {
  state = {
    initialListOfGoods: this.props.goods,
  };

  reverseGoods = () => {
    this.setState(state => ({
      initialListOfGoods: [...state.initialListOfGoods].reverse(),
    }));
  };

  sort = () => {
    this.setState(state => ({
      initialListOfGoods: [...state.initialListOfGoods]
        .sort((product1, product2) => (
          product1.localeCompare(product2)
        )),
    }));
  };

  reset = () => {
    this.setState(
      { initialListOfGoods: this.props.goods },
    );
  };

  sortByLength = () => {
    this.setState(state => ({
      initialListOfGoods: [...state.initialListOfGoods]
        .sort((product1, product2) => (
          product1.length - product2.length
        )),
    }));
  };

  render() {
    const { initialListOfGoods } = this.state;

    return (
      <div className="main">
        <h1
          className="title"
        >
          Goods
        </h1>
        <ul className="list">
          {initialListOfGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <div>
          <button
            className="button"
            type="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={this.sort}
          >
            Sort alphabetically
          </button>

          <button
            className="button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            className="button"
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
