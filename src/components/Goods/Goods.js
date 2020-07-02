import React from 'react';
import PropTypes from 'prop-types';
import { Start } from '../Start/Start';
import { GoodsList } from '../GoodsList/GoodsList';
import { SortButtons } from '../SortButtons/SortButtons';
import { validName } from '../../validProps';

export class Goods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };

    this.buttons = [
      {
        name: 'Reverse', handler: this.onReverse,
      },
      {
        name: 'Sort alphabetically', handler: this.onAlphSort,
      },
      {
        name: 'Reset', handler: this.onReset,
      },
      {
        name: 'Sort by length', handler: this.onLengthSort,
      },
    ];
  }

  onReverse = () => {
    this.setState(prevState => (
      prevState.goodsList.reverse()
    ));
  }

  onReset = () => {
    this.setState({
      goodsList: [...this.props.goods],
    });
  }

  onAlphSort = () => {
    this.setState(prevState => (
      prevState.goodsList.sort()
    ));
  }

  onLengthSort = () => {
    this.setState(prevState => (
      prevState.goodsList.sort((item1, item2) => item1.length - item2.length)
    ));
  }

  onReady = () => {
    this.setState({
      isReady: true, goodsList: [...this.props.goods],
    });
  }

  render() {
    if (this.state.isReady) {
      return (
        <>
          <GoodsList names={this.state.goodsList} />
          <SortButtons buttons={this.buttons} />
        </>
      );
    }

    return <Start handler={this.onReady} />;
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(validName.isRequired).isRequired,
};
