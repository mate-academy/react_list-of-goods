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
          onClick={
            () => this.setState(state => ({
              ...state,
              displayType: 'reverse',
            }))
          }
        >
          REVERSE
        </button>
        <button
          type="button"
          onClick={
            () => this.setState(state => ({
              ...state,
              displayType: 'initial',
              selectedValue: 0,
            }))
          }
        >
          RESET
        </button>
        <button
          type="button"
          onClick={
            () => this.setState(state => ({
              ...state,
              displayType: 'sortAlphabetic',
            }))
          }
        >
          ALPHABETICAL SORT
        </button>
        <button
          type="button"
          onClick={
            () => this.setState(state => ({
              ...state,
              displayType: 'sortLength',
            }))
          }
        >
          LENGTH SORT
        </button>
        <select
          value={this.selectedValue}
          onChange={(event) => {
            const { value } = event.target;
            return (this.setState(state => ({
              ...state,
              selectedValue: value,
              displayType: 'select',
            })))}}
        >
          {[...this.props.goodsList].map((item, index) => (
            <option value={index}>{index + 1}</option>))
          }
        </select>
      </>
    ) : (<button
      type="button"
      onClick={
        () => this.setState(state => ({
          ...state,
          isStarted: true,
        }))
      }
    >
       START
    </button>);
  }
}

export default List;
