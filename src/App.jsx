import React from 'react';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import './App.css';
import { Goods } from './components';

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

const defaultLengthlimit = 1;

function Start({ runAplication }) {
  return (
    <button
      type="button"
      className="start-button"
      onClick={runAplication}
    >
      Start
    </button>
  );
}

function Stop({ runAplication }) {
  return (
    <button
      type="button"
      className="start-button start-button--off"
      onClick={runAplication}
    >
      Stop
    </button>
  );
}

class App extends React.Component {
  state = {
    status: false,
    goodsList: goodsFromServer,
    isReversed: false,
    sortBy: '',
    lengthLimit: defaultLengthlimit,
  };

  componentDidMount() {
    this.setState(state => ({
      goodsForDisplay: [...state.goodsList],
    }));
  }

  setClassName(sortName) {
    const { sortBy, status } = this.state;

    return sortBy === sortName && status;
  }

  resetApp = () => {
    this.setState(state => ({
      isReversed: false,
      sortBy: '',
      goodsForDisplay: [...state.goodsList],
      lengthLimit: defaultLengthlimit,
    }));
  }

  runAplication = () => {
    this.setState(state => ({
      status: !state.status,
    }));
    this.resetApp();
  };

  filterGoods = (event) => {
    const maxLength = +event.target.value;

    this.setState(state => ({
      lengthLimit: maxLength,
      goodsForDisplay: state.goodsList.filter(good => good.length >= maxLength),
    }));
  };

  sortGoods = (event) => {
    const sortBy = event.target.name;

    this.setState(state => ({
      isReversed: false,
      sortBy,
      goodsForDisplay: state.goodsForDisplay.sort((a, b) => (
        sortBy === 'bylength' ? a.length - b.length : a.localeCompare(b)
      )),
    }));
  };

  reverseGoodsList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      goodsForDisplay: state.goodsForDisplay.reverse(),
    }));
  };

  render() {
    const {
      status,
      lengthLimit,
      goodsForDisplay,
      isReversed,
      sortBy,
    } = this.state;

    const button = status
      ? <Stop runAplication={this.runAplication} />
      : <Start runAplication={this.runAplication} />;

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
                className={
                  classnames(
                    'button',
                    { 'button--chosen': this.setClassName('alphabetially') },
                  )
                }
                disabled={!status || sortBy === 'alphabetially'}
                name="alphabetially"
                onClick={this.sortGoods}
              >
                Alphabetially
              </button>
            </div>

            <div className="button-wrapper">
              <button
                type="button"
                className={classnames(
                  'button',
                  { 'button--chosen': this.setClassName('bylength') },
                )
                }
                disabled={!status || sortBy === 'bylength'}
                name="bylength"
                onClick={this.sortGoods}
              >
                By length
              </button>
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                className={
                  classnames('button',
                    { 'button--chosen': (isReversed && status) })
                }
                disabled={!status}
                onClick={this.reverseGoodsList}
              >
                Reverse
              </button>

            </div>
            <div className="button-wrapper">
              <button
                type="button"
                className="button"
                disabled={!status}
                onClick={this.resetApp}
              >
                Reset
              </button>
            </div>
            <div className="button-wrapper">
              <input
                type="range"
                min="1"
                max="10"
                disabled={!status}
                value={lengthLimit}
                onChange={this.filterGoods}
              />
              <label className="range-label">{lengthLimit}</label>
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

            {button}

          </div>
        </main>
      </div>
    );
  }
}

export default App;

Start.propTypes = {
  runAplication: PropTypes.func.isRequired,
};

Stop.propTypes = {
  runAplication: PropTypes.func.isRequired,
};
