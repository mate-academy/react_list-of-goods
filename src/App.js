import React, { Component } from 'react';
import './App.css';
import ListOfGoods from './Components/ListOfGoods';

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

export default class App extends Component {
  state = {
    listOfGoods: null,
    isBtnStartClicked: false,
  };

  handleClick = () => {
    this.setState({
      isBtnStartClicked: true,
      listOfGoods: [...goodsFromServer],
    });
  };

  handleReverse = () => {
    this.setState(state => ({ listOfGoods: [...state.listOfGoods].reverse() }));
  };

  handleSortAbc = () => {
    this.setState(state => (
      {
        listOfGoods: [...state.listOfGoods]
          .sort((a, b) => a.localeCompare(b)),
      }));
  };

  handleSortByLength = () => {
    this.setState(state => (
      {
        listOfGoods: [...state.listOfGoods]
          .sort((a, b) => a.length - b.length),
      }));
  };

  ResetToInitialValue = () => {
    this.setState({ listOfGoods: [...goodsFromServer] });
  };

  SelectByLength = (e) => {
    const selectValue = +e.target.value;

    this.setState({
      listOfGoods: [...goodsFromServer]
        .filter(good => good.length >= selectValue),
    });
  };

  render() {
    const { listOfGoods } = this.state;

    return (
      <div className="App">
        <h1 className="nav">Goods 1</h1>
        {!this.state.isBtnStartClicked
          ? (
            <button
              className="btn waves-effect waves-light"
              type="button"
              onClick={this.handleClick}
            >
              Show Goods
            </button>
          )
          : null
        }
        {this.state.listOfGoods !== null
          ? (
            <div>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={this.handleReverse}
              >
                Reverse
              </button>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={this.handleSortAbc}
              >
                Sort ABC
              </button>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={this.handleSortByLength}
              >
                Sort by length
              </button>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={this.ResetToInitialValue}
              >
                Reset to Initial value
              </button>
              <select
                className="waves-effect waves-light btn select"
                onChange={this.SelectByLength}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <ListOfGoods list={listOfGoods} />
            </div>
          )
          : null
        }
      </div>
    );
  }
}
