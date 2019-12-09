/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

class GoodsList extends React.Component {
  state = {
    isShown: false,
    goods: [...this.props.goods],
    maxLegnthOfGoods: Math.max(...this.props.goods.map(good => good.length)),
    selectedMinLength: 1,
  };

  showHandler = () => {
    this.setState(prevState => ({ isShown: !prevState.isShown }));
  };

  reverseHandler = () => {
    this.setState(prevState => ({ goods: [...prevState.goods].reverse() }));
  };

  sortAlphaHandler = () => {
    this.setState(prevState => ({ goods: prevState.goods.sort() }));
  };

  resetHandler = () => {
    this.setState({ goods: [...this.props.goods] });
  };

  sortLengthHandler = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .sort((a, b) => (a.length - b.length)),
    }));
  };

  filterLengthHandler = () => {
    this.setState(prevState => ({
      goods: prevState.goods
        .filter(good => good.length >= prevState.selectedLength),
    }));
  };

  minLengthHandler = (value) => {
    this.setState({ selectedLength: value });
  };

  render() {
    const { isShown, maxLegnthOfGoods, selectedMinLength } = this.state;

    return (
      <>
        <Buttons
          onItemSelected={this.showHandler}
          onItemReversed={this.reverseHandler}
          onItemSortedAlpha={this.sortAlphaHandler}
          onItemReset={this.resetHandler}
          onItemSortedLength={this.sortLengthHandler}
          OnItemfilteredLength={this.filterLengthHandler}
          OnItemMinLength={this.minLengthHandler}
          maxLength={maxLegnthOfGoods}
          selectedLength={selectedMinLength}
        />
        <ul className={isShown === false ? 'hidden' : 'goods-list'}>
          {this.state.goods.map(good => (
            <li key={Math.random()} className="goods-list__good">{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string) };
GoodsList.defaultProps = { goods: [] };
export default GoodsList;
