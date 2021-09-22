import React from 'react';

type Props = {
  listGoods: string[],
};

type State = {
  isReversed: boolean,
  sortBy: string,
};

export class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  sortAbc = () => {
    this.setState({ sortBy: 'abc' });
  };

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      isReversed,
      sortBy,
    } = this.state;
    const visibleGoods = [...this.props.listGoods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'abc':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <ul className="list">
          {visibleGoods.map((item) => (
            <li key={item} className="list-item">{item}</li>
          ))}
        </ul>

        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={this.sortAbc}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={this.sortLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </>
    );
  }
}
