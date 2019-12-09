import React from 'react';
import PropTypes from 'prop-types';
import Goods from './Goods';
import StartButton from './StartButton';
import ReverseButton from './ReverseButton';
import SortAlphButton from './SortAlphButton';
import ResetButton from './ResetButton';
import SortLenButton from './SortLenButton';
import Select from './Select';

class GoodsList extends React.Component {
  state = {
    visible: false,
    changedList: [...this.props.goods],
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
    this.setState(state => ({ changedList: [...this.props.goods] }));
    document.querySelector('.select').value = 1;
  }

  sortLen = () => {
    this.setState(state => ({
      changedList: [...state.changedList]
        .sort((a, b) => a.length - b.length),
    }));
  }

  filterLen = (event) => {
    this.setState({
      changedList: this.props.goods
        .filter(word => word.length >= event.target.value),
    });
  }

  render() {
    return (
      <div>
        <StartButton
          handlerStart={this.start}
          visibility={this.state.visible}
        />
        <ReverseButton
          handlerReverse={this.reverse}
        />
        <SortAlphButton
          handlerSortAlph={this.sortAlph}
        />
        <ResetButton
          handlerReset={this.reset}
        />
        <SortLenButton
          handlerSortLen={this.sortLen}
        />
        <Select
          handlerFilterLen={this.filterLen}
        />
        <Goods
          goodsList={this.props.goods}
          visibility={this.state.visible}
          changedList={this.state.changedList}
        />
      </div>
    );
  }
}

GoodsList.propTypes = { goods: PropTypes.string.isRequired };

export default GoodsList;
