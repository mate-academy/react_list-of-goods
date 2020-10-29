import React from 'react';
import PropTypes from 'prop-types';
import { List } from '../List';
import './GoodsList.scss';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
  }

  reverseList = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  sortList = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort(),
    }));
  }

  resetList = () => {
    this.setState(() => ({
      goods: this.props.goods,
    }));
  }

  sortListByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App__container container">
        <List goods={goods} />

        <div className="container__buttons buttons">
          <button
            type="button"
            className="buttons__button"
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="buttons__button"
            onClick={this.sortList}
          >
            Sort
          </button>

          <button
            type="button"
            className="buttons__button"
            onClick={this.resetList}
          >
            Reset
          </button>

          <button
            type="button"
            className="buttons__button"
            onClick={this.sortListByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
