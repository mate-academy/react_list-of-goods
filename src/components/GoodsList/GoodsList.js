import React from 'react';
import PropType from 'prop-types';
import './GoodsList.css';
import { SortButton } from '../SortButton/SortButton';
import { SortSelect } from '../SortSelect/SortSelect';

class GoodsList extends React.Component {
  state = {
    selectValue: 1,
    goods: this.props.goods,
    goodsFull: this.props.goods,
  };

  onReverseOrder = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
      goodsFull: [...state.goodsFull].reverse(),
    }));
  };

  onAlphabeticallyOrder = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
      goodsFull: [...state.goodsFull].sort(),
    }));
  };

  onLengthOrder = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
      goodsFull: [...state.goodsFull].sort((a, b) => a.length - b.length),
    }));
  };

  onSelectLength = (event) => {
    const { target } = event;
    const newLength = +target.value;

    this.setState(state => ({
      selectValue: newLength,
      goods: state.goodsFull.filter(good => good.length >= newLength),
    }));
  };

  onReset = () => {
    this.setState(state => ({
      selectValue: 1,
      goods: this.props.goods,
    }));
  };

  render() {
    return (
      <div className="goods">
        <ul className="goods__list">
          {this.state.goods.map(good => (
            <li className="goods__item" key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="goods__sort">
          <SortButton
            onClickHandle={this.onReverseOrder}
            name="Reverse"
          />
          <SortButton
            onClickHandle={this.onLengthOrder}
            name="Sort by length"
          />
          <SortButton
            onClickHandle={this.onAlphabeticallyOrder}
            name="Sort alphabetically"
          />
          <SortSelect
            selectValue={this.state.selectValue}
            onChangeHandle={this.onSelectLength}
          />
          <SortButton
            onClickHandle={this.onReset}
            name="Reset"
          />
        </div>
      </div>
    );
  }
}

export { GoodsList };

GoodsList.propTypes = {
  goods: PropType.arrayOf(PropType.string).isRequired,
};
