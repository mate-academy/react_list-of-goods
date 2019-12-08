import React, { Component } from 'react';

import GoodsList from './GoodsList';
import Buttons from './Buttons';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];
const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ListWithButtons extends Component {
  state = {
    originalList: goodsFromServer,
    filteredList: goodsFromServer,
    selectedLength: `$(lengths[0]}`,
  };

  reverseList = () => {
    this.setState(prevState => (
      { filteredList: [...prevState.filteredList].reverse() }
    ));
  };

  resetList = () => {
    this.setState(prevState => (
      { filteredList: [...prevState.originalList] }
    ));
  };

  sortByAlphabet = () => {
    this.sortList(
      (firstItem, secondItem) => firstItem.localeCompare(secondItem)
    );
  };

  sortByLength = () => {
    this.sortList(
      (firstItem, secondItem) => firstItem.length - secondItem.length
    );
  };

  sortList = (callback) => {
    const { originalList } = this.state;

    this.setState({ filteredList: [...originalList].sort(callback) });
  };

  selectByLength = (event) => {
    const { target: { value } } = event;
    const { originalList } = this.state;

    this.setState({
      selectedLength: value,
      filteredList: [...originalList].filter(word => word.length >= value),
    });
  };

  render() {
    const { filteredList, selectedLength } = this.state;

    return (
      <section className="goods">
        <Buttons
          handleReverseClick={this.reverseList}
          handleAlphaSortClick={this.sortByAlphabet}
          handleResetClick={this.resetList}
          handleLengthSortClick={this.sortByLength}
          handleSelectClick={this.selectByLength}
          selectedOption={selectedLength}
          lengths={lengths}
        />

        <GoodsList goodsList={filteredList} />
      </section>
    );
  }
}

export default ListWithButtons;
