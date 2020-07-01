import React from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';
import { StartButton } from './StartButton';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
    minLength: 1,
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
      minLength: 1,
    })
  )

  sortByLength = () => (
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }))
  )

  showList = () => (
    this.setState(prevState => ({
      listVisibility: 'block--unhide',
      buttonVisibility: 'button--hide',
    }))
  )

  selectedLength = event => (
    this.setState({
      minLength: event.target.value,
    })
  )

  render() {
    const { goods, listVisibility, buttonVisibility, minLength } = this.state;

    const goodsFiltered = goods.filter(good => good.length >= minLength);

    return (
      <>
        <div className={`block ${listVisibility}`}>
          <ul className="list">
            {goodsFiltered.map(good => (
              <GoodItem good={good} key={good} />
            ))}
          </ul>
          <Actions
            reverseList={this.reverseList}
            sortByAlphabet={this.sortByAlphabet}
            resetList={this.resetList}
            sortByLength={this.sortByLength}
            selectedLength={this.selectedLength}
            minLength={minLength}
          />
        </div>

        <StartButton
          buttonVisibility={buttonVisibility}
          showList={this.showList}
        />
      </>
    );
  }
}

const GoodItem = ({ good }) => (
  <li className="list__item">
    <span className="item__text">{good}</span>
  </li>
);

GoodItem.propTypes = PropTypes.string.isRequired;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
