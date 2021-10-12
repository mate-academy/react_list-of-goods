import React from 'react';

type SortBy = 'alphabetically' | 'length';

interface Props {
  goods: string[];
}

interface State {
  isReverse: boolean;
  sortBy: SortBy | null;
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReverse: false,
    sortBy: null,
  };

  reverseList = (): void => {
    this.setState(({ isReverse }) => ({ isReverse: !isReverse }));
  };

  sortList = (option: SortBy): void => {
    this.setState({ sortBy: option });
  };

  resetList = () => {
    this.setState({
      isReverse: false,
      sortBy: null,
    });
  };

  render() {
    const { goods } = this.props;
    const { isReverse, sortBy } = this.state;

    const visibleGoods = [...goods];

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'alphabetically':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default:
            return 0;
        }
      });
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <>
        <button
          type="button"
          name="reverse"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          name="alphabetically"
          onClick={(e) => this.sortList(e.currentTarget.name as SortBy)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          name="length"
          onClick={(e) => this.sortList(e.currentTarget.name as SortBy)}
        >
          Sort by length
        </button>

        <button
          type="button"
          name="reset"
          onClick={this.resetList}
        >
          Reset
        </button>
        <ul>
          {visibleGoods.map(item => (<li key={item}>{item}</li>))}
        </ul>
      </>
    );
  }
}
