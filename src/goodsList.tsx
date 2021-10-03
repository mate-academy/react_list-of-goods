import React from 'react';

type Props = {
  goods: string[];
};

type State = {
  sortBy: string,
  isReversed: boolean,
};

export class ListOfGoods extends React.Component<Props, State> {
  state: State = {
    sortBy: '',
    isReversed: false,
  };

  getList = () => {
    const { isReversed, sortBy } = this.state;
    const { goods } = this.props;

    let visibleGoods = goods;

    if (isReversed) {
      visibleGoods = [...visibleGoods].reverse();
    }

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

    return visibleGoods;
  };

  reverseList = () => {
    this.setState((currentState) => ({ isReversed: !currentState.isReversed }));
  };

  sortByAlph = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  render() {
    const visibleGoods = this.getList();

    return (
      <div>
        <div>
          <button
            type="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortByAlph}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        <ul>
          {visibleGoods.map(good => (
            <li
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
