import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

import { GoodsList } from '../GoodsList';
import { ListOptions } from '../ListOptions';
import { ContentShape } from '../shapes/ContentShape';

export class Content extends PureComponent {
  state = {
    minWordLength: 1,
    goods: this.props.goods,
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prevGood, nextGood) => (
        prevGood.name.localeCompare(nextGood.name)
      )),
    }));
  };

  resetList = () => {
    this.setState({
      goods: this.props.goods,
      minWordLength: 1,
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prevGood, nextGood) => (
        prevGood.name.length - nextGood.name.length
      )),
    }));
  }

  selectLength = (minWordLength) => {
    this.setState({
      goods: this.props.goods.filter(good => (
        good.name.length >= minWordLength
      )),
      minWordLength: +minWordLength,
    });
  }

  render() {
    const { goods, minWordLength } = this.state;

    return (
      <div className="content">
        <GoodsList goods={goods} />

        <ListOptions
          reverseList={this.reverseList}
          resetList={this.resetList}
          sortByAlphabet={this.sortByAlphabet}
          sortByLength={this.sortByLength}
          minWordLength={minWordLength}
          selectLength={this.selectLength}
        />
      </div>
    );
  }
}

Content.propTypes = PropTypes.shape(ContentShape).isRequired;
