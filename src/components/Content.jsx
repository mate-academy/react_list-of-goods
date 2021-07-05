import React from 'react';
import PropTypes from 'prop-types';
import { SortingButtons } from './SortingButtons';
import { SelectLengthButton } from './SelectLengthButton';
import { ResetButton } from './ResetButton';
import { GoodsList } from './GoodsList';

export class Content extends React.Component {
  state = {
    visibleList: this.props.goodsList,
    lengthSortingLimit: 1,
  }

  reverseList = () => {
    this.setState(state => ({
      visibleList: [...state.visibleList].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      visibleList: [...state.visibleList].sort((item1, item2) => (
        item1.name.localeCompare(item2.name))),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      visibleList: [...state.visibleList].sort((item1, item2) => (
        item1.name.length - item2.name.length)),
    }));
  }

  selectLengthSorting = (event) => {
    const { value } = event.target;

    this.setState({
      lengthSortingLimit: Number(value),
      visibleList: this.props.goodsList.filter(
        item => item.name.length >= value,
      ),
    });
  }

  resetSorting = () => {
    this.setState({
      visibleList: this.props.goodsList,
    });
  }

  render() {
    const { visibleList, lengthSortingLimit } = this.state;

    return (
      <>
        <SortingButtons
          reverseList={this.reverseList}
          sortByAlphabet={this.sortByAlphabet}
          sortByLength={this.sortByLength}
        />

        <SelectLengthButton
          selectLengthSorting={this.selectLengthSorting}
          lengthSortingLimit={lengthSortingLimit}
        />

        <ResetButton resetSorting={this.resetSorting} />

        <GoodsList visibleList={visibleList} />
      </>
    );
  }
}

Content.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
