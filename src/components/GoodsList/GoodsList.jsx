import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './goodsList.css';

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

export class GoodsList extends React.Component {
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
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button onClick={this.reverse}>
              Reverse
            </Button>
            <Button onClick={this.sortByAlpha}>
              Sort alphabetically
            </Button>
            <Button onClick={this.sortByLength}>
              Sort by length
            </Button>
            <Button onClick={this.reset}>
              Reset
            </Button>
          </ButtonGroup>
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
        <ul className="products__list">
          {
            goods.map(good => (
              <li
                className="products__item"
                key={good}
              >
                {good}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
