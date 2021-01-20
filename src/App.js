import React from 'react';
import './App.css';

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
    goods: goodsFromServer,
    isListVisible: false,
    disabledButton: true,
  };

  hidenList = () => {
    this.setState({
      isListVisible: true,
      disabledButton: false,
    });
  }

  reverse = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  }

  sort = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort(),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(prev => ({
      goods: [...prev.goods]
        .sort((good1, good2) => good1.length - good2.length),
    }));
  }

  render() {
    const { goods, isListVisible, disabledButton } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {!isListVisible && (
          <button
            type="button"
            onClick={this.hidenList}
            className="app__button"
          >
            Start
          </button>
        )}
        {isListVisible && (
          <ul className="app__list">
            {goods.map(item => (
              <li key={Math.random()} className="app__item">{item}</li>
            ))}
          </ul>
        )}
        <div>
          <button
            type="button"
            onClick={this.reverse}
            disabled={disabledButton}
            className="app__button app__button-active"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sort}
            disabled={disabledButton}
            className="app__button app__button-active"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.reset}
            disabled={disabledButton}
            className="app__button app__button-active"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
            disabled={disabledButton}
            className="app__button app__button-active"
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
