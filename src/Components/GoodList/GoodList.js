import React from 'react';

export const goodsFromServer = [
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

export class GoodsList extends React.Component {
  state = {
    goods: [...goodsFromServer],
    selectedLength: 1,
  }

  select = new Array(10).fill(0).map((item, index) => (
    <option
      key={item}
      value={index + 1}
    >
      {index + 1}
    </option>
  ));

  reverse = () => {
    this.setState(prev => (
      { goods: [...prev.goods].reverse() }
    ));
  }

  sortAlphabetically = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.localeCompare(b)),
    });
  }

  sortByLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((a, b) => a.length - b.length),
    });
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedLength: 1,
    });
  }

  render() {
    const { select } = this.state;

    return (
      <div>
        <ul>
          {this.state.goods
            .filter(item => item.length >= this.state.selectedLength)
            .map(item => (
              <li key={item}>{item}</li>
            ))}
        </ul>
        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <select
          onChange={e => this.setState({ selectedLength: e.target.value })}
        >
          {this.select}
        </select>
      </div>
    );
  }
}
