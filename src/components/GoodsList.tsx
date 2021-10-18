import React from 'react';

type Props = {
  goodsList: string[],
};

type State = {
  isReversed: boolean,
  sortBy: string,
};

export class GoodsList extends React.PureComponent<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: 'id',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByABC = () => {
    this.setState({ sortBy: 'ABC' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const { goodsList } = this.props;
    const newGoodsList = [...goodsList];
    const { isReversed, sortBy } = this.state;

    newGoodsList.sort((good1, good2) => {
      switch (sortBy) {
        case 'ABC':
          return good1.localeCompare(good2);
        case 'length':
          return good1[sortBy] - good2[sortBy];
        default:
          return 0;
      }
    });

    if (isReversed) {
      newGoodsList.reverse();
    }

    return (
      <ul>
        {newGoodsList.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
        <button
          type="button"
          onClick={this.sortByABC}
        >
          Sort by A-Z
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.reverse}
        >
          Make reverse
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isReversed: false, sortBy: 'id' });
          }}
        >
          Make reset
        </button>
      </ul>
    );
  }
}
