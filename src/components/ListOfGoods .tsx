import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type State = {
  isReversed: boolean;
  sortBy: string;
};

type Props = {
  goods: string[];
};

export class ListOfGoods extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ isReversed: false, sortBy: '' });
  };

  getVisibleList = () => {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    let visibleList = goods;

    if (sortBy) {
      visibleList = [...visibleList]
        .sort((goodA, goodB) => {
          switch (sortBy) {
            case 'alphabet':
              return goodA.localeCompare(goodB);
            case 'length':
              return goodA.length - goodB.length;
            default:
              return 0;
          }
        });
    }

    if (isReversed) {
      visibleList = [...visibleList].reverse();
    }

    return visibleList;
  };

  render() {
    const visibleList = this.getVisibleList();

    return (
      <div>
        <ul className="table-success">
          {visibleList.map(good => (
            <li
              key={good}
              className="table-success"
            >
              {good}
            </li>
          ))}
        </ul>

        <div className="d-flex p-2 bd-highlight justify-content-evenly">
          <button
            className="btn btn-dark"
            type="button"
            onClick={this.reverse}
          >
            reverse
          </button>

          <button
            className="btn btn-dark"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            className="btn btn-dark"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            className="btn btn-dark"
            type="button"
            onClick={this.reset}
          >
            reset
          </button>
        </div>
      </div>

    );
  }
}
