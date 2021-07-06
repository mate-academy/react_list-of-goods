import React from 'react';
import PropType from 'prop-types';
import './GoodsList.css';
import { ActionButtons } from '../ActionButtons/ActionButtons';

export class GoodsList extends React.Component {
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
    this.setState({
      selectValue: 1,
      goods: this.props.goods,
      goodsFull: this.props.goods,
    });
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
        <ActionButtons
          selectValue={this.state.selectValue}
          handleReverseOrder={this.onReverseOrder}
          handleAlphabeticallyOrder={this.onAlphabeticallyOrder}
          handleLengthOrder={this.onLengthOrder}
          handleSelectLength={this.onSelectLength}
          handleReset={this.onReset}
        />
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropType.arrayOf(PropType.string).isRequired,
};
