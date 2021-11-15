import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

interface Product {
  id: string;
  value: string;
}

const goodsFromServer: Product[] = [
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
].map(good => ({
  id: uuidv4(),
  value: good,
}));

type Props = {};

interface State {
  isStarted: boolean,
  goods: Product[],
}

class App extends React.Component<Props, State> {
  state: State = {
    isStarted: false,
    goods: goodsFromServer,
  };

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (product1, product2) => product1.value.localeCompare(product2.value),
      ),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (product1, product2) => product1.value.length - product2.value.length,
      ),
    }));
  };

  reset = () => {
    this.setState(state => ({
      goods: [...state.goods],
    }));
  };

  render() {
    const { goods, isStarted } = this.state;

    return (
      <div className="App">
        {isStarted
          ? (
            <>
              <h1 className="app__title">Goods</h1>
              <div className="buttons app__buttons">
                <button
                  type="button"
                  onClick={this.reverse}
                  className="button buttons__button"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="button buttons__button"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="button buttons__button"
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="button buttons__button"
                >
                  Reset
                </button>
              </div>

              <ul className="list app__list">
                {goods.map(good => (
                  <li key={good.id} className="list__item">
                    {good.value}
                  </li>
                ))}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.start}
              className="button app__start"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
