import React from 'react';
import PropTypes from 'prop-types';
import Goods from './Goods';
import StartButton from './StartButton';
import Button from './Button';
import Select from './Select';

class GoodsList extends React.Component {
  state = {
    visible: false,
    changedList: [...this.props.goods],
    selectedValue: 1,
  };

  start = () => {
    this.setState({ visible: true });
  }

  reverse = () => {
    this.setState(state => ({ changedList: [...state.changedList].reverse() }));
  }

  sortAlph = () => {
    this.setState(state => ({ changedList: [...state.changedList].sort() }));
  }

  reset = () => {
    this.setState(state => ({
      changedList: [...this.props.goods],
      selectedValue: 1,
    }));
  }

  sortLen = () => {
    this.setState(state => ({
      changedList: [...state.changedList]
        .sort((a, b) => a.length - b.length),
    }));
  }

  filterLen = (event) => {
    const { value } = event.target;

    this.setState({
      selectedValue: value,
      changedList: this.props.goods
        .filter(word => word.length >= value),
    });
  }

  render() {
    const filters = [
      { title: 'Reverse', callback: this.reverse },
      { title: 'Sort alphabetically', callback: this.sortAlph },
      { title: 'Reset', callback: this.reset },
      { title: 'Sort by length', callback: this.sortLen },
    ];

    if (!this.state.visible) {
      return (
        <StartButton
          handlerStart={this.start}
          visibility={this.state.visible}
        />
      );
    }

    return (
      <div>
        {filters.map(filter => (
          <Button
            handler={filter.callback}
            title={filter.title}
          />
        ))}
        <Select
          handlerFilterLen={this.filterLen}
          selectedValue={this.state.selectedValue}
        />
        <Goods
          changedList={this.state.changedList}
        />
      </div>
    );
  }
}

GoodsList.propTypes = { goods: PropTypes.string.isRequired };

export default GoodsList;
