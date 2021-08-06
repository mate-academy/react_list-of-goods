/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import goodsImgsFromServer from '../../images';
import { GoodsList } from '../GoodsList/GoodsList';

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
  'Potato',
  'Pear',
  'Watermelon',
];

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    images: goodsImgsFromServer,
    isActive: false,
    isReversed: false,
    sortBy: null,
    length: 1,
  };

  showGoods = () => this.setState(state => ({
    isActive: !state.isActive,
  }));

  reverseGoods = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  )

  sortGoodsAlphabetically = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortGoodsByNameLength = () => {
    this.setState({
      sortBy: 'nameLength',
    });
  };

  setInitialOrder = () => {
    this.setState({
      goods: goodsFromServer,
      sortBy: null,
      isReversed: false,
      length: 1,
    });
  }

  changeLength = (event) => {
    this.setState({
      length: event.target.value,
    });
  }

  render() {
    const { goods, isActive, images, isReversed, sortBy, length } = this.state;

    const goodsCopy = goods.filter(good => good.length >= length);

    goodsCopy.sort((name1, name2) => {
      switch (sortBy) {
        case 'alphabetically':
          return name1.localeCompare(name2);
        case 'nameLength':
          return name1.length - name2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="controlPannel">
          <br />
          <button
            type="button"
            onClick={this.showGoods}
            className={isActive ? 'active' : 'not-active'}
          >
            {isActive ? 'Finish' : 'Start'}
          </button>

          <button type="button" onClick={this.reverseGoods}>
            Reverse
          </button>

          <button type="button" onClick={this.sortGoodsAlphabetically}>
            Sort A-B
          </button>

          <button type="button" onClick={this.sortGoodsByNameLength}>
            SortNameLength
          </button>

          <button type="button" onClick={this.setInitialOrder}>
            Reset
          </button>

          <FormControl variant="outlined" style={{ minWidth: '150px' }}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              // style={{ color: "green" }}
            >
              length
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // style={{ color: "green" }}
              name="length"
              label="Length"
              value={this.state.length}
              onChange={this.changeLength}
            >
              {[...Array(10)].map((_, i) => (
                <MenuItem
                  key={this.state.goods[i]}
                  value={i + 1}
                  // onChange={this.changeLength}
                >
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="goodsBoard">
          {!this.state.isActive ? (
            <img
              src="https://st2.depositphotos.com/1000560/7434/v/950/depositphotos_74347787-stock-illustration-shopping-basket-with-fresh-food.jpg"
              alt="StartImg"
              className="startImg"
            />
          ) : (
            <GoodsList goods={goodsCopy} images={images} />
          )}
        </div>
      </div>
    );
  }
}
