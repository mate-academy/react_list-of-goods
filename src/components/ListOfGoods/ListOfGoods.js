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
      showList: false,
      showButtons: false,
      selectedOption: 1,
    };
  }

  showList = () => {
    this.setState(prevState => ({
      ...prevState,
      showStartButton: false,
      showList: true,
      showButtons: true,
    }));

    return (
      <List goods={this.state.listOfGoods} />
    );
  };

  reverseList = () => {
    this.setState(prevState => ({
      listOfGoods: [...prevState.initialListOfGoods].reverse(),
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
    return (
      <>
        <Button
          callback={this.showList}
          shown={this.state.showStartButton}
          text="Start"
        />
        <List goods={this.state.listOfGoods} shown={this.state.showList} />
        <Button
          callback={this.reverseList}
          shown={this.state.showButtons}
          text="Reverse"
        />
        <Button
          callback={this.sortList}
          shown={this.state.showButtons}
          text="Sort alphabetically"
        />
        <Button
          callback={this.resetList}
          shown={this.state.showButtons}
          text="Reset"
        />
        <Button
          callback={this.sortListByLength}
          shown={this.state.showButtons}
          text="Sort by length"
        />
        <Select
          callback={this.filterListByLength}
          shown={this.state.showButtons}
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
