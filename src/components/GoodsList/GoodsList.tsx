import { Component } from 'react';

interface Props {
  goods: string[];
}

enum SortType {
  Default,
  ByLength,
  Alphabetical,
}

interface State {
  isReversed: boolean;
  sortBy: SortType;
}

export class GoodsList extends Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: SortType.Default,
  };

  handleReverseClick = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSortByLengthClick = () => {
    this.setState({ sortBy: SortType.ByLength });
  };

  handleSortAlphabeticallyClick = () => {
    this.setState({ sortBy: SortType.Alphabetical });
  };

  handleResetClick = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.Default,
    });
  };

  render() {
    const { goods } = this.props;
    const {
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoodsList = [...goods].sort(
      (itemA, itemB) => {
        switch (sortBy) {
          case SortType.ByLength:
            return itemA.length - itemB.length;

          case SortType.Alphabetical:
            return itemA.localeCompare(itemB);

          case SortType.Default:
            return 0;

          default:
            throw new Error(`Error: SortType ${sortBy} is undefined`);
        }
      },
    );

    if (isReversed) {
      visibleGoodsList.reverse();
    }

    return (
      <div className="GoodsList">
        <ul className="GoodsList__list">
          {visibleGoodsList.map(
            item => (<li key={item}>{item}</li>),
          )}
        </ul>

        <div className="GoodsList__controlPanel">
          <button
            type="button"
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.handleSortByLengthClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.handleSortAlphabeticallyClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
