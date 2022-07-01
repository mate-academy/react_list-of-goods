import React from 'react';

type Props = {
  goods: string[];
};

type State = {
  isReversed: boolean;
  sortBy: string;
};

class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLenght = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const { goods } = this.props;
    const { isReversed, sortBy } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;

        case 'alphabet':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div>
        <ul>
          {visibleGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.reverse}
        >
          reverse
        </button>
        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort by alphabet
        </button>
        <button
          type="button"
          onClick={this.sortByLenght}
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default GoodsList;
