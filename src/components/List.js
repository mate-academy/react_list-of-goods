import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      isReversed: false,
      isSorted: false,
      isSortedByLength: 0,
      isReseted: false,
    };
  }

  open = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      isShown: true,
    });
  }

  reverse = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      isReversed: true,
      isSorted: false,
      isSortedByLength: false,
      isReseted: false,
    });
  }

  sort = () => {
    this.setState({
      isReversed: false,
      // eslint-disable-next-line react/no-access-state-in-setstate
      isSorted: true,
      isSortedByLength: false,
      isReseted: false,
    });
  }

  sortByLength = (event) => {
    this.setState({ isSortedByLength: event.target.value });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      // eslint-disable-next-line react/no-unused-state
      isSortedByLength: false,
      // eslint-disable-next-line react/no-access-state-in-setstate
      isReseted: true,
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { arrOfGoods } = this.props;
    let list = null;

    if (this.state.isShown) {
      list = arrOfGoods.map(item => <li>{item}</li>);
    }

    if (this.state.isReversed) {
      // eslint-disable-next-line array-bracket-spacing
      list = [ ...arrOfGoods ].reverse().map(item => <li>{item}</li>);
    }

    if (this.state.isSorted) {
      // eslint-disable-next-line array-bracket-spacing
      list = [ ...arrOfGoods ].sort().map(item => <li>{item}</li>);
    }

    if (this.state.isReseted) {
      list = arrOfGoods.map(item => <li>{item}</li>);
    }

    if (this.state.isSortedByLength) {
      list = arrOfGoods
        .filter(item => (item.length >= this.state.isSortedByLength
          ? item : null))
        .map(item => <li>{item}</li>);
    }

    const btnStart = this.state.isShown
    || <button type="button" onClick={this.open}>Start</button>;

    const btnReverse = (
      <button type="button" onClick={this.reverse}>
        Reverse
      </button>
    );

    const btnSort = <button type="button" onClick={this.sort}>Sort</button>;

    const btnReset = <button type="button" onClick={this.reset}>Reset</button>;
    const select = (
      <select value={this.state.isSortedByLength} onChange={this.sortByLength}>
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
    );

    return (
      <>
        {btnStart}
        {btnReverse}
        {btnSort}
        {btnReset}
        {select}
        <ul>
          {list}
        </ul>
      </>
    );
  }
}

export default List;
