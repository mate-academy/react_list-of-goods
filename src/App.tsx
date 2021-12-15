/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

interface State {
  goods: string[];
  showList: boolean;
  value: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    showList: false,
    value: `${goodsFromServer.length}`,
  };

  reverse = () => {
    this.setState((state: State) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state: State) => ({
      goods: state.goods.sort((a: string, b: string) => {
        return a.localeCompare(b);
      }),
    }));
  };

  sortByLength = () => {
    this.setState((state: State) => ({
      goods: state.goods.sort((a: string, b: string) => {
        return a.length - b.length;
      }),
    }));
  };

  render() {
    const {
      goods, showList,
    } = this.state;

    return (
      <div className="App">
        <div className="card">
          <h1 className="card__title">Goods</h1>
          <div className="list__conteiner">
            {!showList
              ? (
                <button
                  className="button button-start"
                  type="button"
                  onClick={() => {
                    this.setState((state: State) => ({ showList: !state.showList }));
                  }}
                >
                  Start
                </button>
              )
              : (
                <GoodsList
                  props={goods.filter((_item, i) => i < +this.state.value)}
                />
              )}
          </div>

          <div className="select">
            <select
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.currentTarget.value })}
            >
              {goodsFromServer.map((_item, i) => {
                return (
                  <option
                    value={i + 1}
                  >
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="button-container">
            <button
              className="button"
              type="button"
              disabled={!showList}
              onClick={() => {
                this.reverse();
              }}
            >
              Reverse
            </button>

            <button
              className="button button-sortAlphabetically"
              type="button"
              disabled={!showList}
              onClick={() => {
                this.sortAlphabetically();
              }}
            >
              Sort alphabetically
            </button>

            <button
              className="button button-sortByLength"
              type="button"
              disabled={!showList}
              onClick={() => {
                this.sortByLength();
              }}
            >
              Sort by length
            </button>

            <button
              className="button button-reset"
              type="button"
              disabled={!showList}
              onClick={() => {
                this.setState({
                  goods: [...goodsFromServer],
                  value: `${goodsFromServer.length}`,
                });
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
