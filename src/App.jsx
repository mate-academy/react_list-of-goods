import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

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
    goodsList: goodsFromServer,
    status: false,
    sortBy: 'alphabetically',
    lengthLimit: 1,
    toReverse: false,

  }

  defaultState = () => {
    this.setState({
      goodsList: goodsFromServer,
      sortBy: 'alphabetically',
      lengthLimit: 1,
      toReverse: false,
    });
  }

  runAplication = (event) => {
    const button = event.target;

    this.setState(state => ({
      status: !state.status,
      lengthLimit: 1,
    }));

    if (!this.state.status) {
      this.defaultState();
    }

    button.classList.toggle('start-button--off');
    button.innerText = this.state.status
      ? 'Start'
      : 'Stop';
  }

  setLengthLimit = (event) => {
    this.setState(({
      lengthLimit: +event.target.value,
    }));
  }

  setReverseStatus = () => {
    this.setState(state => ({
      toReverse: !state.toReverse,
    }));
  }

  sortBy = (event) => {
    this.setState({
      sortBy: event.target.value,
      toReverse: false,
    });
  }

  render() {
    const { status, goodsList, sortBy, toReverse, lengthLimit } = this.state;
    const goodsForDisplay = goodsList.filter(good => (
      good.length >= lengthLimit
    ));

    goodsForDisplay.sort((a, b) => (sortBy === 'byLength'
      ? a.length - b.length
      : a.localeCompare(b)));

    if (toReverse) {
      goodsForDisplay.reverse();
    }

    return (
      <div className="App">
        <header className="title-block">
          <h1 className="title">Goods</h1>
          <span className="data" />
        </header>
        <main className="main">
          <div className="block-controllers">
            <div className="button-wrapper">
              <button
                type="button"
                className="button button--enabled"
                value="alphabetically"
                disabled={!status}
                onClick={this.sortBy}
              >
                Alphabetially
              </button>
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                className="button"
                value="byLength"
                disabled={!status}
                onClick={this.sortBy}
              >
                By length
              </button>
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                className="button"
                disabled={!status}
                onClick={this.setReverseStatus}
              >
                Reverse
              </button>

            </div>
            <div className="button-wrapper">
              <button
                type="button"
                className="button"
                disabled={!status}
                onClick={this.defaultState}
              >
                Recet
              </button>

            </div>

            <div className="button-wrapper">

              <input
                type="range"
                min="1"
                max="10"
                disabled={!status}
                value={this.state.lengthLimit}
                onChange={this.setLengthLimit}
              />
              <label className="range-label">{this.state.lengthLimit}</label>

              <datalist id="tickmarks">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
                <option value="6" />
                <option value="7" />
                <option value="8" />
                <option value="9" />
                <option value="10" />
              </datalist>

            </div>

          </div>

          <div className="dispaly-block">
            <div className="board">
              {
                !status
                  ? <h2 className="pressStart">Press START</h2>
                  : (
                    <Goods
                      goods={goodsForDisplay}
                    />
                  )
              }
            </div>
            <button
              type="button"
              className="start-button"
              onClick={this.runAplication}
            >
              Start
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
