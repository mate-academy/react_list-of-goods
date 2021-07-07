import React from 'react';
import PropTypes from 'prop-types';
import { GoodListPropTypes } from '../propTypes/GoodListPropTypes';
import { AppButtons } from '../AppButtons';
import { GoodsList } from '../GoodsList';
import { AppButtonsPropTypes } from '../propTypes/AppButtonsPropTypes';

export class PageContent extends React.Component {
  state = {
    goods: this.props.preparedGoods,
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlph = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: this.props.preparedGoods,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.name.length - b.name.length),
    }));
  }

  render() {
    return (
      <>
        <AppButtons
          reverseList={this.reverseList}
          sortByAlph={this.sortByAlph}
          sortByLength={this.sortByLength}
          reset={this.reset}
        />
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

PageContent.propTypes = PropTypes.shape({
  goods: PropTypes.shape(GoodListPropTypes).isRequired,
  AppButtonsPropTypes,
}).isRequired;
