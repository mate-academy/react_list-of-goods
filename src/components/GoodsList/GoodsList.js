import React from 'react';
import PropTypes from 'prop-types';
import { GoodsItem } from '../GoodsItem/GoodsItem';
import { Actions } from '../Actions/Actions';
import './GoodsList.css';

export class GoodsList extends React.Component {
  state = {
    isVisible: false,
    goods: [...this.props.goods],
    minLength: 1,
  }

  showList = () => {
    this.setState({
      isVisible: !this.isVisible,
    });
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByName = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...this.props.goods],
      minLength: 1,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  handleLengthSelection = (event) => {
    this.setState({
      minLength: event.target.value,
    });
  }

  render() {
    const { isVisible, goods, minLength } = this.state;

    return (
      <div className="GoodsList">
        {isVisible
          ? (
            <div className="GoodsList__wrapper">
              <div className="GoodsList__list">
                <GoodsItem goods={goods.filter(
                  good => good.length > minLength,
                )}
                />
              </div>
              <Actions
                reverseList={this.reverseList}
                sortByName={this.sortByName}
                reset={this.reset}
                sortByLength={this.sortByLength}
                handleLengthSelection={this.handleLengthSelection}
                minLength={minLength}
              />
            </div>
          )
          : (
            <div>
              <button type="button" onClick={this.showList}>
                Start
              </button>
            </div>
          )}
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
