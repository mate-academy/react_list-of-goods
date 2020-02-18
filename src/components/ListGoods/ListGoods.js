import React from 'react';
import PropTypes from 'prop-types';
import { Goods } from '../Goods/Goods';
import { Controls } from '../Controls/Controls';
import './ListGoods.css';

export class ListGoods extends React.Component {
  state = {
    goods: this.props.listOfGoods,
    isClicked: false,
    initialGoods: [...this.props.listOfGoods],
    length: 1,
  };

  startClick = () => {
    this.setState({
      isClicked: true,
    });
  };

  reversed = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortedAlpha = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  resetedGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      length: 1,
    }));
  };

  sortByLength = () => {
    const sortLength = (a, b) => a.length - b.length;

    this.setState(prevState => ({
      goods: [...prevState.goods].sort(sortLength),
    }));
  };

  selescted = (event) => {
    this.setState({
      goods: [...this.props.listOfGoods]
        .filter(item => item.length >= event.target.value),
      length: event.target.value,
    });
  };

  render() {
    const { isClicked, goods, initialGoods } = this.state;

    return (

      !isClicked
        ? (
          <button
            type="button"
            className="button_start"
            onClick={this.startClick}
          >
          start
          </button>

        )
        : (
          <>
            <Controls
              reversed={this.reversed}
              sortedAlpha={this.sortedAlpha}
              resetedGoods={this.resetedGoods}
              sortByLength={this.sortByLength}
              selectAction={this.selescted}
              length={this.state.length}
              selectedArray={initialGoods}
            />
            <Goods goods={goods} />
          </>
        )

    );
  }
}

ListGoods.propTypes = {
  listOfGoods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
