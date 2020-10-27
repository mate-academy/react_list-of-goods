import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';
import CustomSelect from '../CustomSelect/CustomSelect';
import List from '../List/List';

class Content extends Component {
  state = {
    originList: this.props.listFromServer,
    currentList: [...this.props.listFromServer],
    wordsLength: 1,
  }

  reverseList = () => {
    this.setState(state => ({
      currentList: [...state.currentList].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      currentList: [...state.currentList].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      currentList: [...state.currentList].sort((a, b) => a.length - b.length),
    }));
  }

  resetOrder = () => {
    this.setState(state => ({
      currentList: state.originList,
      wordsLength: 1,
    }));
  }

  filterByWordLength = (target) => {
    this.setState(state => ({
      currentList: state.originList.filter(item => item.length >= target.value),
      wordsLength: target.value,
    }));
  }

  render() {
    const { currentList, wordsLength } = this.state;
    const {
      reverseList,
      sortByAlphabet,
      resetOrder,
      sortByLength,
      filterByWordLength,
    } = this;

    return (
      <>
        <div>
          <CustomButton title="Reverse" func={reverseList} />
          <CustomButton title="By Alphabet" func={sortByAlphabet} />
          <CustomButton title="By Length" func={sortByLength} />
          <CustomSelect length={wordsLength} func={filterByWordLength} />
          <CustomButton title="Reset" func={resetOrder} />
        </div>
        <div>
          <List list={currentList} />
        </div>
      </>
    );
  }
}

Content.propTypes = {
  listFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Content;
