import React from 'react';
import { Button } from './components/button';
import { GoodsList } from './components/goodsList';
import './App.scss';
import 'bulma';

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

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    sortByAlphabet: true,
    sortByLength: true,
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGoods, seconGoods) => (
        state.sortByLength
          ? firstGoods.length - seconGoods.length
          : seconGoods.length - firstGoods.length
      )),

      sortByLength: !state.sortByLength,
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGoods, seconGoods) => (
        state.sortByAlphabet
          ? firstGoods.localeCompare(seconGoods)
          : seconGoods.localeCompare(firstGoods)
      )),

      sortByAlphabet: !state.sortByAlphabet,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods.reverse()],
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: goodsFromServer,
    }));
  }

  start = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="app">
        {isVisible
          ? (
            <>
              <div className="button-box">
                <Button
                  reverse={this.reverse}
                  reset={this.reset}
                  sortByAlphabet={this.sortByAlphabet}
                  sortByLengt={this.sortByLength}
                />
              </div>

              <div className="product">
                <GoodsList goods={goods} />
              </div>
            </>

          )
          : (
            <button
              type="button"
              className="button is-primary is-outlined"
              onClick={this.start}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
