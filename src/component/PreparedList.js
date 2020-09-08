import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './Buttons';
import { Select } from './Select';

export class PreparedList extends React.Component {
  state = {
    goods: this.props.list,
    length: 1,
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.list,
      length: 1,
    });
  }

  sortBySize = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  select = ({ target }) => {
    this.setState({
      length: target.value,
      goods: this.props.list.filter(item => (
        item.length >= target.value)),
    });
  }

  render() {
    const { goods, length } = this.state;

    return (
      <ul>
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
        <Buttons
          reset={this.reset}
          reverse={this.reverse}
          sortAlphabetically={this.sortAlphabetically}
          sortBySize={this.sortBySize}
        />
        <Select value={length} action={this.select} />
      </ul>
    );
  }
}

PreparedList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}
