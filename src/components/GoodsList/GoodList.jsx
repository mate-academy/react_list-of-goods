import React from 'react';
import PropTypes from 'prop-types';
import './GoodList.css';

import { SelectList } from '../SelectList';
import { List } from '../List';
import { Buttons } from '../Buttons';

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

    return (
      <div className="App">
        <SelectList
          selectValue={selectValue}
          select={this.select}
        />

        <List goodsList={goodsList}/>

        <div className="App__buttons buttons">
          <Buttons
            reverse={this.reverse}
            alphabeticalSort={this.alphabeticalSort}
            lengthSort={this.lengthSort}
            reset={this.reset}
          />
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
