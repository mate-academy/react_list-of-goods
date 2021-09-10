import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

type State = {
  goods: string[];
};

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
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
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({ goods: [...this.props.goods] });
  };

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul className="list-group">
          {goods.map(good => (
            <li key={good} className="list-group-item text-center">
              {good}
            </li>
          ))}
        </ul>

        <div className="d-flex mt-4">
          <button
            type="button"
            className="
            btn
            btn-outline-primary"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="
            btn
            btn-outline-primary
            mx-1"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="
            btn
            btn-outline-primary
            mx-1"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="
            btn
            btn-outline-primary"
            onClick={this.reset}
          >
            Reset
          </button>

        </div>
      </>
    );
  }
}
