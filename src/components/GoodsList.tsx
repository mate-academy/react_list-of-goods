import React from 'react';
import './GoodsList.css';

enum SortType {
  Alphabetically,
  Length,
}

type State = {
  goods: string[];
  isReversed: boolean;
  sortType: SortType | null;
};

type Props = {
  goods: string[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: this.props.goods,
    isReversed: false,
    sortType: null,
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: null,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlpabetically = () => {
    this.setState({ sortType: SortType.Alphabetically });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.Length });
  };

  render() {
    const {
      goods,
      isReversed,
      sortType,
    } = this.state;

    const goodsCopy = [...goods];

    goodsCopy.sort((g1, g2) => {
      switch (sortType) {
        case SortType.Alphabetically:
          return g1.localeCompare(g2);

        case SortType.Length:
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="GoodsList">
        <ul>
          {goodsCopy.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="GoodsList__controls">
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlpabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
