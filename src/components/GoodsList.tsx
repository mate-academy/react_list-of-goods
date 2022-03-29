import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[],
};

type State = {
  goods: string[],
};

export class GoodList extends React.Component<Props, State> {
  state = {
    goods: [...this.props.goods],
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (a.length - b.length)),
    }));
  };

  reset = () => {
    this.setState({
      goods: this.props.goods,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <p className="Goods-field">
        <button
          type="button"
          className="btn"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className="btn"
          onClick={this.reset}
        >
          Reset
        </button>
        <ul className="Good-list">
          {
            goods.map(good => (
              <li
                key={good}
                className="Good"
              >
                {good}
              </li>
            ))
          }
        </ul>
      </p>
    );
  }
}
