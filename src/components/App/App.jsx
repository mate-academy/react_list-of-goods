/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import { classnames } from classnames;
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

const goodsImgsFromServer = [
  {
    Potato:
      'https://st3.depositphotos.com/1967477/13510/v/1600/depositphotos_135100584-stock-illustration-cartoon-potato-giving-thumbs-up.jpg',
  },
  {
    Pear: 'https://st.depositphotos.com/1526816/1348/v/950/depositphotos_13485012-stock-illustration-pear.jpg',
  },
  {
    Watermelon:
      'https://st3.depositphotos.com/1967477/13510/v/1600/depositphotos_135100662-stock-illustration-cartoon-watermelon-giving-thumbs-up.jpg',
  },
  {
    'Ice cream':
      'https://st4.depositphotos.com/24038622/27073/v/1600/depositphotos_270733152-stock-illustration-ice-cream-mascot-cartoon-illustration.jpg',
  },
  {
    Apple:
      'https://static8.depositphotos.com/1497380/1035/v/950/depositphotos_10356035-stock-illustration-green-apple-cartoon-character.jpg',
  },
  {
    Bread:
      'https://st2.depositphotos.com/23395854/46307/v/1600/depositphotos_463070890-stock-illustration-cute-wheat-loaf-of-bread.jpg',
  },
  {
    Carrot:
      'https://st2.depositphotos.com/1007168/6107/v/950/depositphotos_61077827-stock-illustration-carrot-showing-muscle-arms.jpg',
  },
  {
    Honey:
      'https://st2.depositphotos.com/7857468/12441/v/950/depositphotos_124417528-stock-illustration-cartoon-bee-holding-bucket-with.jpg',
  },
  {
    Jam: 'https://st3.depositphotos.com/9034578/34559/v/1600/depositphotos_345599216-stock-illustration-waving-friendly-strawberry-jam-mascot.jpg',
  },
  {
    Garlic:
      'https://st4.depositphotos.com/7850056/20472/v/1600/depositphotos_204721044-stock-illustration-cute-cartoon-garlic-character-vector.jpg',
  },
  {
    Dumplings:
      'https://st3.depositphotos.com/34407204/37619/v/1600/depositphotos_376192220-stock-illustration-happy-gyoza-cartoon-character-emoji.jpg',
  },
  {
    Eggs: 'https://static8.depositphotos.com/1472772/978/i/950/depositphotos_9787339-stock-photo-funny-cartoon-egg.jpg',
  },
  {
    Fish: 'https://st2.depositphotos.com/2255567/10039/v/950/depositphotos_100393514-stock-illustration-fish-chef-cartoon.jpg',
  },
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
