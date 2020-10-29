import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.css';

import { GoodItem } from '../GoodItem';
import { ReverseButton } from '../ReverseButton';
import { SortButton } from '../SortButton';
import { ResetButton } from '../ResetButton';

export class GoodList extends React.Component {
  state = {
    goodsList: this.props.goodsList,
    selectValue: '',
  }

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  }

  alphabeticalSort = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(),
    }));
  }

  lengthSort = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  }

  select = (currSelectValue) => {
    const { goodsFromServer } = this.props;

    this.setState({
      goodsList: goodsFromServer.filter(good => good.length >= currSelectValue),
      selectValue: String(currSelectValue),
    });
  }

  reset = () => {
    this.setState({
      goodsList: this.props.goodsFromServer,
      selectValue: '1',
    });
  }

  render() {
    const { goodsList, selectValue } = this.state;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <select
          className="App__select select"
          value={selectValue}
          onChange={(event) => {
            this.select(+event.target.value);
          }}
        >
          {numbers.map(number => (
            <option
              key={numbers}
              value={number}
            >
              {number}
            </option>
          ))}
        </select>

        <ul className="App__list list">
          {goodsList.map(good => <GoodItem good={good} key={good} />)}
        </ul>

        <div className="App__buttons buttons">
          <ReverseButton reverse={this.reverse} />

          <SortButton
            alphabeticalSort={this.alphabeticalSort}
            lengthSort={this.lengthSort}
          />

          <ResetButton reset={this.reset} />
        </div>
      </div>
    );
  }
}

GoodList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  goodsFromServer: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
