import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../List/List';
import Button from '../buttons/Button/Button';
import Select from '../Select/Select';

class ListOfGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialListOfGoods: [...this.props.listFromServer],
      listOfGoods: [...this.props.listFromServer],
      showStartButton: true,
      isLoaded: false,
      selectedOption: 1,
    };
  }

  showList = () => {
    this.setState({ isLoaded: true });
  };

  reverseList = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods].reverse(),
    }));
  };

  sortList = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.initialListOfGoods].sort(),
    }));
  };

  resetList = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.initialListOfGoods],
      selectedOption: 1,
    }));
  };

  sortListByLength = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.initialListOfGoods].sort(
        (a, b) => a.length - b.length
      ),
    }));
  };

  filterListByLength = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectedOption: value,
      listOfGoods: prevState.initialListOfGoods.filter(
        item => item.length >= value
      ),
    }));
  };

  render() {
    if (!this.state.isLoaded) {
      return (
        <Button
          callback={this.showList}
          shown={this.state.showStartButton}
          text="Start"
        />
      );
    }

    return (
      <>
        <List goods={this.state.listOfGoods} />
        <Button
          callback={this.reverseList}
          text="Reverse"
        />
        <Button
          callback={this.sortList}
          text="Sort alphabetically"
        />
        <Button
          callback={this.resetList}
          text="Reset"
        />
        <Button
          callback={this.sortListByLength}
          text="Sort by length"
        />
        <Select
          callback={this.filterListByLength}
          selectedOption={this.state.selectedOption}
        />
      </>
    );
  }
}

ListOfGoods.defaultProps = {
  listFromServer: [],
};

ListOfGoods.propTypes = {
  listFromServer: PropTypes.arrayOf(PropTypes.string),
};

export default ListOfGoods;
