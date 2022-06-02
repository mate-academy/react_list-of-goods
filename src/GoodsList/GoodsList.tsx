import { Component } from 'react';

type Props = {
  goods: string[];
};

type State = {
  isListReversed?:boolean;
  sortBy: string;
};

class GoodsList extends Component<Props, State> {
  state = {
    isListReversed: false,
    sortBy: '',
  };

  reverseList = () => {
    this.setState(state => ({
      isListReversed: !state.isListReversed,
    }));
  };

  sortList = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  resetList = () => {
    this.setState({
      isListReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { goods } = this.props;
    const { isListReversed, sortBy } = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((name1, name2) => {
      switch (sortBy) {
        case 'name':
          return name1.localeCompare(name2);
        case 'length':
          return name1.length - name2.length;
        default:
          return 0;
      }
    });

    if (isListReversed) {
      goodsCopy.reverse();
    }

    return (
      <>
        <ul className="goodsList">
          {goodsCopy.map(goodElem => (
            <li key={goodElem}>
              {goodElem}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortList}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.resetList}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          sortByLength
        </button>
      </>
    );
  }
}

export default GoodsList;
