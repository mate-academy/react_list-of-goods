import React, { Component } from 'react';
import goods from '../../goods/goods';
import './Basket.css';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: goods,
      requiredList: [],
      show: false,
    };
  }

  makeDefaultList = () => {
    this.setState(prev => ({
      show: true,
      requiredList: prev.currentList.map(product => (
        <li key={product}>{product}</li>
      )),
    }));
  }

  makeReversedList = () => {
    this.setState(prev => ({
      requiredList: [...prev.currentList].reverse().map(product => (
        <li key={product}>{product}</li>
      )),
    }));
  }

  makeAlphabeticallySortedList = () => {
    this.setState(prev => ({
      requiredList: [...prev.currentList]
        .sort((first, second) => first.localeCompare(second))
        .map(product => (
          <li key={product}>{product}</li>
        )),
    }));
  }

  makeLengthSortedList = () => {
    this.setState(prev => ({
      requiredList: [...prev.currentList]
        .sort((first, second) => first.length > second.length)
        .map(product => (
          <li key={product}>{product}</li>
        )),
    }));
  }

  makeLengthFiltredList = (event) => {
    const { value } = event.target;

    this.setState(prev => ({
      requiredList: [...prev.currentList]
        .filter(product => product.length >= value)
        .map(product => (
          <li key={product}>{product}</li>
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
          {goods.map((product, index) => (
            index === 0
              ? <option key={product} value={index + 1} selected>{index + 1}</option>
              : <option key={product} value={index + 1}>{index + 1}</option>
          ))}
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
          onClick={this.makeDefaultList}
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
