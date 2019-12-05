import React from 'react';
// import PropTypes from 'prop-types';

import Reset from './Buttons/Reset';
import Reverse from './Buttons/Reverse';
import Sort from './Buttons/Sort';

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
    this.setState(state => ({
      isReversed: !state.isReversed,
      isReseted: false,
    }));
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

    for (let i = 1; i < 11; i += 1) {
      listOfOption.push(<option value={i} key={i}>{i}</option>);
    }

    return listOfOption;
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { arrOfGoods } = this.props;

    let list = [...arrOfGoods.arrOfGoods];

    if (this.state.isSorted) {
      list.sort();
    }

    if (this.state.isReversed) {
      list.reverse();
    }

    if (this.state.isReseted) {
      list = [...arrOfGoods.arrOfGoods];
    }

    if (this.state.isSortedByLength) {
      list = [...arrOfGoods.arrOfGoods]
        .filter(item => (item.length >= this.state.isSortedByLength
          ? item : null));
    }

    const select = (
      <select
        value={this.state.isSortedByLength}
        onChange={this.sortByLength}
        className="appear__other_select"
      >
        {this.options()}
      </select>
    );

    // eslint-disable-next-line react/prop-types
    const { shown } = this.props;

    if (shown) {
      return (
        <div className="appear">
          <div className="appear__buttons">
            <Reverse reverse={this.reverse} />
            <Sort sort={this.sort} />
            <Reset reset={this.reset} />
          </div>
          <h2 className="title">
            Ten of the most amazing beaches.
          </h2>
          <div className="appear__other">
            <ol className="appear__other_list">
              {list.map(item => <li key={item}>{item}</li>)}
            </ol>
            <div>
              <p className="appear__other_text">
                What you choose?
              </p>
              {select}
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
}

// Appear.propTypes = {
//   arrOfGoods: PropTypes.object,
//   shown: PropTypes.bool.isRequired,
// };

export default Appear;
