import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

class App extends React.Component {
  state = {
    goods: [],
    isShown: false,
  }

  start = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer],
      isShown: !prevState.isShown,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [
        ...prevState.goods.reverse(),
      ],
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [
        ...prevState.goods.sort((a, b) => a.localeCompare(b)),
      ],
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [
        ...prevState.goods
          .sort((a, b) => a.replace(/\s/g, '').length - b.replace(/\s/g, '')
            .length),
      ],
    }));
  }

  render() {
    const { isShown } = this.state;

    return (
      <div className="App">
        {!isShown && (
          <button
            type="button"
            onClick={this.start}
          >
            Show goods
          </button>
        )}
        <GoodsList goods={this.state.goods} />

        {isShown && (
          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="button"
              type="button"
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              className="button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              className="button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by words length
            </button>

          </div>
        )}
      </div>
    );
  }
}

export default App;
