import React from 'react';

type Props = {
  goods: string[],
};

type State = {
  isReversed: boolean,
  sortBy: string
};

class GoodsList extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
      isReversed: false,
    });
  };

  sortBylength = () => {
    this.setState({
      sortBy: 'length',
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { isReversed, sortBy } = this.state;
    const goodsList = [...this.props.goods];

    goodsList.sort((prod1, prod2) => {
      switch (sortBy) {
        case 'length':
          return prod1.length - prod2.length;
        case 'alphabet':
          return prod1.localeCompare(prod2);
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <>
        <ul className="goodsList">
          {goodsList.map(item => (
            <li key={item} className="">
              {item}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="button"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className="button"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortBylength}
            className="button"
          >
            Sort by length
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="button is-danger"
          >
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default GoodsList;
