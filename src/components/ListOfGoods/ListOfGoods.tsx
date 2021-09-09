import * as React from 'react';

type Props = {
  list: string[],
};

type State = {
  isReversed: boolean;
  isSortedBy: 'name' | 'length' | 'none';
  reset: boolean;
};

class ListOfGoods extends React.Component<Props, State> {
  state: State = {
    isReversed: false,
    isSortedBy: 'none',
    reset: false,
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortListByName = () => {
    if (this.state.isSortedBy === 'name') {
      this.setState({ isSortedBy: 'none' });
    } else {
      this.setState({ isSortedBy: 'name' });
    }
  };

  resetList = () => {
    this.setState(state => ({
      reset: !state.reset,
    }));
  };

  sortByLengthList = () => {
    if (this.state.isSortedBy === 'length') {
      this.setState({ isSortedBy: 'none' });
    } else {
      this.setState({ isSortedBy: 'length' });
    }
  };

  render() {
    const { list } = this.props;
    let newList = [...list];

    if (this.state.isSortedBy !== 'none') {
      switch (this.state.isSortedBy) {
        case 'name':
          newList.sort((firsGood, secondGood) => firsGood.localeCompare(secondGood));
          break;

        case 'length':
          newList.sort((firsGood, secondGood) => firsGood.length - secondGood.length);
          break;

        default:
          break;
      }
    }

    if (this.state.isReversed) {
      newList = [...newList].reverse();
    }

    if (this.state.reset) {
      newList = [...list];
      this.state.reset = false;
      this.state.isSortedBy = 'none';
      this.state.isReversed = false;
    }

    return (
      <div className="listContainer">
        <ul className="listOfGoods">
          {newList.map(good => (
            <li key={good} className="listItem">
              {good}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button type="button" className="buttons__button" onClick={this.reverseList}>Reverse</button>
          <button type="button" className="buttons__button" onClick={this.sortListByName}>Sort</button>
          <button type="button" className="buttons__button" onClick={this.resetList}>Reset</button>
          <button type="button" className="buttons__button" onClick={this.sortByLengthList}>Sort by length</button>
        </div>
      </div>
    );
  }
}

export { ListOfGoods };
