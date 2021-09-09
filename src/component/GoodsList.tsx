import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

type State = {
  isReversed: boolean;
  sortBy: string;
};

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(currentState => ({
      isReversed: !currentState.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  getVisibleGoods = () => {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    let visibleGoods = goods;

    if (sortBy) {
      visibleGoods = [...visibleGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

    return visibleGoods;
  };

  render() {
    const visibleGoods = this.getVisibleGoods();

    return (
      <>
        <ul className="list-group">
          {visibleGoods.map(good => (
            <li
              key={good}
              className="list-group-item"
            >
              {good}
            </li>
          ))}
        </ul>
        <div className="btn-group role=group aria-label=Basic example">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort by alphabet
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}
