import React from 'react';
import classNames from 'classnames';
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
    showContent: false,
    goods: goodsFromServer,
  }

  showingContent = () => {
    this.setState({ showContent: true });
  }

  reversing = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  lengthSorting = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((a, b) => a.length - b.length),
    }));
  }

  alphabetSorting = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  resetting = () => {
    this.setState({ goods: goodsFromServer });
  }

  render() {
    const { showContent, goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={
            classNames('button button__start',
              { hidden: showContent === true })
          }
          onClick={this.showingContent}
        >
          START
        </button>
        <div className="content">
          {
            showContent && (
              <>
                <h1>Goods:</h1>

                <ul>
                  {goods.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="buttons">
                  <button
                    type="button"
                    className="button"
                    onClick={this.reversing}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.alphabetSorting}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.resetting}
                  >
                    Reset
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.lengthSorting}
                  >
                    Sort by length
                  </button>
                </div>
              </>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
