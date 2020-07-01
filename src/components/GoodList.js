import React from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverseList = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }))
  )

  sortByAlphabet = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }))
  )

  resetList = () => (
    this.setState({
      goods: [...this.props.goods],
    })
  )

  sortByLength = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }))
  )

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map(good => (
            <GoodItem good={good} />
          ))}
        </ul>
        <Actions
          reverseList={this.reverseList}
          sortByAlphabet={this.sortByAlphabet}
          resetList={this.resetList}
          sortByLength={this.sortByLength}
        />
      </>
    );
  }
}

const GoodItem = ({ good }) => (
  <li key={good}>
    {good}
  </li>
);

GoodItem.propTypes = PropTypes.string.isRequired;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
