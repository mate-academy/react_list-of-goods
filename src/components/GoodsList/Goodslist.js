import React from 'react';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import Buttons from '../Buttons/Buttons';

export default class GoodsList extends React.Component {
  state = {
    goods: this.props.goodsList,
    length: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goodsList,
      length: 1,
    });
  }

  sortLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  select = ({ target }) => {
    this.setState({
      length: target.value,
      goods: this.props.goodsList.filter(item => (
        item.length >= target.value)),
    });
  }

  render() {
    const { goods, length } = this.state;

    return (
      <ul className="goods">
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
        <Buttons
          reset={this.reset}
          reverse={this.reverse}
          sort={this.sortAlphabetically}
          sortLength={this.sortLength}
        />
        <Select value={length} action={this.select} />
      </ul>
    );
  }
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
