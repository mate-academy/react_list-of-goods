import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { GoodsList } from './Components/GoodsList';
import { ButtonsList } from './Components/ButtonsList';

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

class App extends React.PureComponent {
  state = {
    clickedStart: false,
    goods: goodsFromServer,
    selectValue: 1,
  };

  startHideButton = () => {
    this.setState(state => ({
      clickedStart: !state.clickedStart,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortGoodsAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  resetGoods = () => {
    this.setState({
      goods: goodsFromServer,
      selectValue: 1,
    });
  };

  sortGoodsByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  handleSelect = (event) => {
    const minLength = event.target.value;

    this.setState({
      selectValue: minLength,
      goods: goodsFromServer.filter(good => good.length >= minLength),
    });
  };

  render() {
    const { clickedStart, goods, selectValue } = this.state;
    const buttonsList = [
      {
        name: 'Reverse',
        func: this.reverseGoods,
        id: 1,
      },
      {
        name: 'Sort alpabetically',
        func: this.sortGoodsAlphabetically,
        id: 2,
      },
      {
        name: 'Sort by length',
        func: this.sortGoodsByLength,
        id: 3,
      },
      {
        name: 'Reset',
        func: this.resetGoods,
        id: 4,
      },
    ];

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {clickedStart
          ? (
            <div className="app__content">
              <button
                type="button"
                className="ui button"
                onClick={this.startHideButton}
              >
                Hide
              </button>
              <GoodsList goods={goods} />
              <ButtonsList buttonsList={buttonsList} />
              <select
                onChange={this.handleSelect}
                value={selectValue}
              >
                {numbers.map(number => (
                  <option
                    key={number}
                    value={number}
                  >
                    {number}
                  </option>
                ))}
              </select>
            </div>
          )
          : (
            <button
              type="button"
              className="ui button"
              onClick={this.startHideButton}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
