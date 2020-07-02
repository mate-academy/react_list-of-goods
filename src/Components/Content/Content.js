import React from 'react';
import { Button } from '../Button/Button';
import { GoodsList } from '../GoodsList/GoodsList';
import { ShapeGoods } from '../Shapes/ShapeGood';

export class Content extends React.Component {
  state = {
    activeItem: false,
    goods: this.props.goods,
    defaultSelect: 1,
  };

  handleStart = () => {
    this.setState(prevState => ({
      activeItem: !prevState.activeItem,
    }));
  }

  onSortedReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.reverse()],
    }));
  };

  onSortedAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  onSortedLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (itemA, itemB) => (itemA.length - itemB.length),
      ),
    }));
  };

  onReset = () => {
    this.setState({
      goods: this.props.goods,
      defaultSelect: 1,
    });
  };

  onSelected = (itemLength) => {
    this.setState({
      goods: this.props.goods
        .filter(good => itemLength <= good.length),
      defaultSelect: itemLength,
    });
  };

  render() {
    return (
      <>
        {!this.state.activeItem
          ? (
            <Button
              onClick={this.handleStart}
              title="Start"
            />
          )
          : (
            <GoodsList
              goods={this.state.goods}
              onSortedReverse={this.onSortedReverse}
              onSortedAlphabet={this.onSortedAlphabet}
              onSortedLength={this.onSortedLength}
              onReset={this.onReset}
              onSelected={this.onSelected}
              defaultSelect={this.state.defaultSelect}
            />
          )
        }
      </>
    );
  }
}

Content.propTypes = ShapeGoods.isRequired;
