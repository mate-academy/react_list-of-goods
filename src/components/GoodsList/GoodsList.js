import React from 'react';
// import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons';

class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    reserveGoods: this.props.goods,
    selectValue: 0,
  };

  handleReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  abcFunc = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  lengthFunc = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  resetFunc = () => {
    this.setState(prevState => ({
      goods: [...prevState.reserveGoods],
    }));
  };

  handleSelect = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      selectValue: value,
      goods: prevState.reserveGoods.filter(item => item.length >= value),
    }));
  };

  render() {
    const { goods, selectValue } = this.state;

    return (
      <div>
        <Buttons
          reverseFunc={this.handleReverse}
          abcFunc={this.abcFunc}
          selectFunc={this.handleSelect}
          selectValue={selectValue}
          resetFunc={this.resetFunc}
          lengthFunc={this.lengthFunc}
        />
        <ul>
          {goods.map(item => (
            <li className="list-item" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GoodsList;
