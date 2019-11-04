import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class ListOfGoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStartButton: true,
      isLoaded: false,
      selectedOption: 1,
      listOfGoods: [...this.props.listFromServer],
    };

    this.showList = this.showList.bind(this);
    this.reverseList = this.reverseList.bind(this);
    this.sortList = this.sortList.bind(this);
    this.resetList = this.reverseList.bind(this);
    this.sortListByLength = this.sortListByLength.bind(this);
    this.filterListByLength = this.filterListByLength.bind(this);
    this.render = this.render.bind(this);
  }

  showList = () => {
    this.setState({ isLoaded: true });
  };

  reverseList() {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods].reverse(),
    }));
  }

  sortList() {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods].sort(),
    }));
  }

  resetList() {
    this.setState(prevState => ({
      selectedOption: 1,
      listOfGoods: [...this.props.listFromServer],
    }));
  }

  sortListByLength() {
    this.setState(prevState => ({
      listOfGoods: [...prevState.listOfGoods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  filterListByLength(event) {
    const { value } = Number(event.target.value);

    this.setState(prevState => ({
      listOfGoods: [...this.props.listFromServer]
        .filter(item => item.length >= value),
      selectedOption: value,
    }));
  }

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
        <ul>
          {this.state.listOfGoods.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
        <select
          name="select"
          onChange={this.filterListByLength}
          value={this.state.selectedOption}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
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
