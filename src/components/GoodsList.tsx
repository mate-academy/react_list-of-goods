import React from 'react';

type Props = {
  goodsList: string[];
};

type State = {
  sortBy: string;
  isReversed: boolean;
};

class GoodsList extends React.Component<Props, State> {
  state = {
    sortBy: '',
    isReversed: false,
  };

  reverse = () => {
    this.setState(currentState => ({
      isReversed: !currentState.isReversed,
    }));
  };

  sortBy = (value: string) => {
    this.setState({ sortBy: value });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  getGoodsList = () => {
    const { sortBy, isReversed } = this.state;

    let visibleList = this.props.goodsList;

    if (sortBy) {
      visibleList = [...visibleList].sort((a, b) => {
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

    if (isReversed) {
      visibleList = [...visibleList].reverse();
    }

    return visibleList;
  };

  render() {
    const goodsList = this.getGoodsList();

    return (
      <>
        <div className="buttons">
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={() => this.sortBy('alphabet')}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={() => this.sortBy('length')}
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
        <ul className="goodsList">
          {goodsList.map(good => (
            <li
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default GoodsList;
