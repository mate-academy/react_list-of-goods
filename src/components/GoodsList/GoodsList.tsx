import React from 'react';

type SortBy = 'alphabetically' | 'length' | 'default';

interface Props {
  goods: string[],
}

interface State {
  isReversed: boolean,
  sortBy: SortBy,
}

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    sortBy: 'default',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: 'default',
    });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;
    const copyOfGoods = [...goods];

    copyOfGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetically':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="goods">
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
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
        <ul className="goods__list">
          {copyOfGoods.map(good => (
            <li
              className="goods__item"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
