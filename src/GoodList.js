import React, { Component } from 'react';

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

class GoodList extends Component {
  state = {
    basicGoods: [],
    goods: [],
    isStarted: false,
    selectedValue: 0,
  }

  HandleStartButton = () => {
    this.setState({
      basicGoods: [...goodsFromServer],
      goods: [...goodsFromServer],
      isStarted: true,
    });
  };

  HandleReverseButton = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  HandleAlfabeticalButton = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  HandleResetButton = () => {
    this.setState(prevState => ({
      goods: [...prevState.basicGoods],
      selectedValue: 1,
    }));
  };

  HandleLengthButton = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  HandleSelectChange = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      selectedValue: value,
      goods: [...prevState.basicGoods].filter(item => item.length > value),
    }));
  };

  render() {
    if (!this.state.isStarted) {
      return (
        <div>
          <button
            type="button"
            onClick={this.HandleStartButton}
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div>
        <button
          type="button"
          onClick={this.HandleReverseButton}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.HandleAlfabeticalButton}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.HandleResetButton}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.HandleLengthButton}
        >
          Sort by length
        </button>

        <select
          value={this.state.selectedValue}
          onChange={this.HandleSelectChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <ul>
          {this.state.goods.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GoodList;
