import React from 'react';
import './App.css';

type Props = {
  goods: string[];
};

type State = {
  visibleGoods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    visibleGoods: [...this.props.goods],
  };

  reverse = () => {
    this.setState((currentState) => {
      const newCopy = [...currentState.visibleGoods];

      return {
        visibleGoods: newCopy.reverse(),
      };
    });
  };

  sortAlphabetically = () => {
    this.setState((currentState) => {
      const newCopy = currentState.visibleGoods.sort((a, b) => a.localeCompare(b));

      return {
        visibleGoods: newCopy,
      };
    });
  };

  reset = () => {
    this.setState({ visibleGoods: [...this.props.goods] });
  };

  sortByLength = () => {
    this.setState((currentState) => {
      const newCopy = currentState.visibleGoods.sort((a, b) => a.length - b.length);

      return {
        visibleGoods: newCopy,
      };
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <table className="table">
          <tbody>
            {this.state.visibleGoods.map(good => <tr><td key={good}>{good}</td></tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
