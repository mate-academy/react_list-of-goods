import React from 'react';

import Reverse from './Buttons/Reverse';
import Sort from './Buttons/Sort';
import Reset from './Buttons/Reset';

// eslint-disable-next-line react/prop-types

class Appear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReversed: false,
      isSorted: false,
      isSortedByLength: 0,
      isReseted: false,
    };
  }

  reverse = () => {
    this.setState({
      isReversed: true,
      isSorted: false,
      isSortedByLength: false,
      isReseted: false,
    });
  }

  sort = () => {
    this.setState({
      isReversed: false,
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
      isSortedByLength: false,
      isReseted: true,
    });
  }

  options = () => {
    const listOfOption = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 11; i++) {
      listOfOption.push(<option value={i} key={i}>{i}</option>);
    }

    return listOfOption;
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { arrOfGoods } = this.props;
    let list = arrOfGoods.arrOfGoods
      .map(item => <li key="item">{item}</li>);

    if (this.state.isReversed) {
      list = [...arrOfGoods.arrOfGoods]
        .reverse().map(item => <li key="item">{item}</li>);
    }

    if (this.state.isSorted) {
      list = [...arrOfGoods.arrOfGoods]
        .sort().map(item => <li key="item">{item}</li>);
    }

    if (this.state.isReseted) {
      list = [...arrOfGoods.arrOfGoods]
        .map(item => <li key="item">{item}</li>);
    }

    if (this.state.isSortedByLength) {
      list = arrOfGoods.arrOfGoods
        .filter(item => (item.length >= this.state.isSortedByLength
          ? item : null))
        .map(item => <li key="item">{item}</li>);
    }

    const select = (
      <select value={this.state.isSortedByLength} onChange={this.sortByLength}>
        {this.options()}
      </select>
    );

    // eslint-disable-next-line react/prop-types
    const { shown } = this.props;

    if (shown) {
      return (
        <div>
          <Reverse reverse={this.reverse} />
          <Sort sort={this.sort} />
          <Reset reset={this.reset} />
          {select}
          <ul>
            {list}
          </ul>
        </div>
      );
    }

    return null;
  }
}

export default Appear;
