import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'initial',
      selectedValue: 0,
      isStarted: false,
    };
  }

  reverse = () => this.setState(state => ({
    ...state,
    displayType: 'reverse',
  }));

  initial = () => this.setState(state => ({
    ...state,
    displayType: 'initial',
    selectedValue: 0,
  }));

  sortAlphabetic = () => this.setState(state => ({
    ...state,
    displayType: 'sortAlphabetic',
  }));

  sortLength = () => this.setState(state => ({
    ...state,
    displayType: 'sortAlphabetic',
  }));

  selectItem = (event) => {
    const { value } = event.target;

    return (this.setState(state => ({
      ...state,
      selectedValue: value,
      displayType: 'select',
    })));
  };

  start = () => this.setState(state => ({
    ...state,
    isStarted: true,
  }));

  render() {
    let goodsToDisplay;

    switch (this.state.displayType) {
      case 'initial':
        goodsToDisplay = [...this.props.goodsList];
        break;
      case 'reverse':
        goodsToDisplay = [...this.props.goodsList].reverse();
        break;
      case 'sortAlphabetic':
        goodsToDisplay = [...this.props.goodsList].sort();
        break;
      case 'sortLength':
        goodsToDisplay = [...this.props.goodsList].sort((a, b) => a.length - b.length);
        break;
      case 'select':
        goodsToDisplay = [...this.props.goodsList].filter(elem => elem.length >= +this.state.selectedValue + 1);
        break;
    }

    return this.state.isStarted ? (
      <>
        <ul>
          {goodsToDisplay.map(item => <li>{item}</li>)}
        </ul>
        <button
          type="button"
          onClick={this.reverse}
        >
          REVERSE
        </button>
        <button
          type="button"
          onClick={this.initial}
        >
          RESET
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetic}
        >
          ALPHABETICAL SORT
        </button>
        <button
          type="button"
          onClick={this.sortLength}
        >
          LENGTH SORT
        </button>
        <select
          value={this.selectedValue}
          onChange={this.selectItem}
        >
          {[...this.props.goodsList].map((item, index) => (
            <option value={index}>{index + 1}</option>))
          }
        </select>
      </>
    ) : (
      <button
        type="button"
        onClick={this.start}
      >
       START
      </button>
    );
  }
}

export default List;
