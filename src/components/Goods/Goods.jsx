import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { GoodsList } from '../GoodsList';
import { GoodsButtonGroup } from '../GoodsButtonGroup';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class Goods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goods: goodsFromServer,
      sortLengthToggler: true,
      sortAlphabetToggler: true,
      selectedValue: 1,
    };
  }

  sortByAlpha = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => (
        state.sortAlphabetToggler
          ? firstGood.localeCompare(secondGood)
          : secondGood.localeCompare(firstGood)
      )),
      sortAlphabetToggler: !state.sortAlphabetToggler,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => (
        state.sortLengthToggler
          ? firstGood.length - secondGood.length
          : secondGood.length - firstGood.length
      )),
      sortLengthToggler: !state.sortLengthToggler,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  onSelectClick = (event) => {
    this.setState({
      selectedValue: event.target.value,
      goods: [...goodsFromServer].filter(good => (
        good.length >= event.target.value
      )),
    });
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      selectedValue: 1,
    });
  }

  render() {
    const { goods, selectedValue } = this.state;

    return (
      <div className="products">
        <>
          <GoodsButtonGroup
            reverse={this.reverse}
            sortByAlpha={this.sortByAlpha}
            sortByLength={this.sortByLength}
            reset={this.reset}
          />
          <InputLabel id="demo-simple-select-outlined-label">
            Select minimal product length
          </InputLabel>
          <div className="products__select">
            <Select
              variant="outlined"
              onChange={this.onSelectClick}
              value={selectedValue}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
            >
              {
                [...goodsFromServer].map((item, index) => (
                  <MenuItem
                    key={item}
                    value={index + 1}
                  >
                    {index + 1}
                  </MenuItem>
                ))
              }
            </Select>
          </div>
        </>
        <GoodsList goods={goods} />
      </div>
    );
  }
}
