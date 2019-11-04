import React, { Component } from 'react';
import goods from '../../goods/goods';
import './Basket.css';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: [...goods],
      requiredList: null,
      show: false,
    };
  }

  showOptions = () => {
    this.setState(prevState => ({
      show: prevState.show = true,
      currentList: prevState.currentList = [...goods],
      requiredList: prevState.currentList.map(product => (
        <li>{product}</li>
      ))
    }));
  }

  makeDefaultList = () => {
    this.setState(prevState => ({
      currentList: prevState.currentList = [...goods],
      requiredList: prevState.currentList.map(product => (
        <li>{product}</li>
      )),
    }));
  }

  makeReversedList = () => {
    this.setState(() => ({
      currentList: this.state.currentList.reverse(),
      requiredList: this.state.currentList.map(product => (
        <li>{product}</li>
      )),
    }));
  }

  makeAlphabeticallySortedList = () => {
    this.setState(() => ({
      currentList: this.state.currentList.sort((first, second) => first.localeCompare(second)),
      requiredList: this.state.currentList.map(product => (
        <li>{product}</li>
      )),
    }));
  }

  makeLengthSortedList = () => {
    this.setState(() => ({
      currentList: this.state.currentList.sort((first, second) => first.length > second.length),
      requiredList: this.state.currentList.map(product => (
        <li>{product}</li>
      )),
    }));
  }

  makeLengthFiltredList = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      currentList: prevState.currentList = [...goods].filter(product => product.length >= value),
      requiredList: prevState.currentList.map(product => (
        <li>{product}</li>
      )),
    }));
  }

  makeBasketButtons = () => (
    <div className="basket__buttons">
      <button
        className="basket__button"
        type="button"
        onClick={this.makeReversedList}
      >
          Reverse
      </button>
      <button
        className="basket__button"
        type="button"
        onClick={this.makeAlphabeticallySortedList}
      >
          Sort alphabetically
      </button>
      <button
        className="basket__button"
        type="button"
        onClick={this.makeDefaultList}
      >
          Reset
      </button>
      <button
        className="basket__button"
        type="button"
        onClick={this.makeLengthSortedList}
      >
          Sort by length
      </button>
      <label className="basket__label">
          Min goods length:
        <select
          className="basket__select"
          onChange={this.makeLengthFiltredList}
        >
          <option value={1} selected>1</option>
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
      </label>
    </div>
  )

  render() {
    return (
      <div className="basket">
        <button
          className={
            this.state.show === false
              ? 'basket__start'
              : 'basket__start hide'}
          type="button"
          onClick={this.showOptions}
        >
          Start
        </button>
        <div className={
          this.state.show === false
            ? 'basket__body hide'
            : 'basket__body'}
        >
          {this.makeBasketButtons()}
          <ul className="basket__list">
            {this.state.requiredList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Basket;
