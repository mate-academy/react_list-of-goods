import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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
    goods: [...goodsFromServer],
    isVisible: false,
  }

  start = () => {
    this.setState(
      state => ({
        isVisible: true,
      }),
    );
  };

  reverse = () => {
    this.setState(
      state => ({
        goods: [...state.goods].reverse(),
      }),
    );
  };

  sortAlphabetically = () => {
    this.setState(
      state => ({
        goods: [...state.goods].sort(
          (good1, good2) => good1.localeCompare(good2),
        ),
      }),
    );
  };

  sortByLength = () => {
    this.setState(
      state => ({
        goods: [...state.goods].sort(
          (good1, good2) => good1.length - good2.length,
        ),
      }),
    );
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { goods } = this.state;
    const { reset, sortByLength, sortAlphabetically, reverse, start } = this;

    return (
      <div className="App">
        {!this.state.isVisible && (
          <div
            className="start__button"
          >
            <Button onclick={start} purpose="start" />
          </div>
        )
        }

        {this.state.isVisible
        && (
          <div className="card">
            <h1 className="card-header-title is-centered">
              Goods
            </h1>
            <GoodsList
              products={goods}
            />
            <div className="card-section">
              <Button
                onclick={reverse}
                purpose="Reverse"
              />
              <Button
                onclick={sortAlphabetically}
                purpose="Sort alphabetically"
              />
              <Button
                onclick={sortByLength}
                purpose="Sort by length"
              />
              <Button
                onclick={reset}
                purpose="Reset"
              />
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
