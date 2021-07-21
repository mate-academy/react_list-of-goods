import React from 'react';
import PropTypes from 'prop-types';
import { GoodsList } from './GoodsList';
import { ButtonsControl } from './ButtonsControl';

export class RenderGoods extends React.Component {
  state = {
    goodsList: this.props.goodsFromServer,
    isReversed: false,
    sortBy: null,
    length: 1,
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  setSortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  setSortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: null,
      length: 1,
    });
  }

  setLength = (event) => {
    this.setState({ length: event.target.value });
  }

  render() {
    const visibleList
      = this.state.goodsList.filter(goods => goods.length >= this.state.length);

    visibleList.sort((goods1, goods2) => {
      switch (this.state.sortBy) {
        case 'alphabet':
          return goods1.localeCompare(goods2);

        case 'length':
          return goods1.length - goods2.length;

        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      visibleList.reverse();
    }

    return (
      <div>
        <GoodsList goodsList={visibleList} />
        <ButtonsControl
          reverse={this.reverse}
          setSortByAlphabet={this.setSortByAlphabet}
          setSortByLength={this.setSortByLength}
          reset={this.reset}
          setLength={this.setLength}
          length={this.state.length}
        />
      </div>
    );
  }
}

RenderGoods.propTypes = {
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
};
