import React from 'react';
import './App.css';

type Props = {
  goods: string[];
};

type State = {
  copy: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    copy: [...this.props.goods],
  };

  reverse = () => {
    this.setState((state) => {
      return {
        copy: state.copy.reverse(),
      };
    });
  };

  sortAlphabetically = () => {
    this.setState((state) => {
      const newCopy = state.copy.sort((a, b) => a.localeCompare(b));

      return {
        copy: newCopy,
      };
    });
  };

  reset = () => {
    this.setState({ copy: [...this.props.goods] });
  };

  sortByLength = () => {
    this.setState((state) => {
      const newCopy = state.copy.sort((a, b) => a.length - b.length);

      return {
        copy: newCopy,
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
            {this.state.copy.map(good => <tr><td key={good}>{good}</td></tr>)}
          </tbody>
        </table>
      </div>
    );
  }
}
