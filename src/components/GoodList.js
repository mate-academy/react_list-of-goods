import React from 'react';
import PropTypes from 'prop-types';

import { Actions } from './Actions';
import { StartButton } from './StartButton';
import { GoodItem } from './GoodItem';
import { SelectedLength } from './SelectedLength';

export class GoodsList extends React.Component {
  state = {
    visible: false,
    goods: this.props.goods,
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
      visible: true,
    }))
  )

  selectedLength = event => (
    this.setState({
      minLength: event.target.value,
    })
  )

  render() {
    const { goods, minLength, visible } = this.state;

    const goodsFiltered = goods.filter(good => good.length >= minLength);

    return (
      <>
        {
          visible
            ? (
              <div className={`block `}>
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

                <SelectedLength
                  selectedLength={this.selectedLength}
                  minLength={minLength}
                />
              </div>
            )
            : (
              <StartButton
                showList={this.showList}
              />
            )
        }

      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
