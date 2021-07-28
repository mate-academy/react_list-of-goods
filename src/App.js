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
          (a, b) => a.length - b.length,
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
    return (
      <div className="App">
        {!this.state.isVisible && (
          <div
            className="start__button"
          >
            <Button onclick={this.start} purpose="start" />
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
              products={this.state.goods}
            />
            <div className="card-section">
              <Button
                onclick={this.reverse}
                purpose="Reverse"
              />
              <Button
                onclick={this.sortAlphabetically}
                purpose="Sort alphabetically"
              />
              <Button
                onclick={this.sortByLength}
                purpose="Sort by length"
              />
              <Button
                onclick={this.reset}
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
