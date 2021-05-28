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

function StartApp({ toggleApplication }) {
  return (
    <button
      type="button"
      className="start-button"
      onClick={toggleApplication}
    >
      Start
    </button>
  );
}

function StopApp({ toggleApplication }) {
  return (
    <button
      type="button"
      className="start-button start-button--off"
      onClick={toggleApplication}
    >
      Stop
    </button>
  );
}

class App extends React.Component {
  state = {
    status: false,
    goodsForDisplay: [...goodsFromServer],
    isReversed: false,
    sortBy: '',
    lengthLimit: defaultLengthlimit,
  };

  setClassName(sortName) {
    const { sortBy, status } = this.state;

    return sortBy === sortName && status;
  }

  resetApp = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      goodsForDisplay: [...goodsFromServer],
      lengthLimit: defaultLengthlimit,
    });
  }

  toggleApplication = () => {
    this.setState(state => ({
      status: !state.status,
    }));
    this.resetApp();
  };

  filterGoods = (event) => {
    const maxLength = +event.target.value;

    this.setState({ lengthLimit: maxLength });
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
      // goodsForDisplay,
      isReversed,
      sortBy,
    } = this.state;

    const goodsForDisplay1 = this.state.goodsForDisplay.filter(good => good.length >= lengthLimit);

    const button = status
      ? <StopApp toggleApplication={this.toggleApplication} />
      : <StartApp toggleApplication={this.toggleApplication} />;

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
                className={classnames(
                  'button',
                  { 'button--chosen': this.setClassName('alphabetically') },
                )}
                disabled={!status || sortBy === 'alphabetically'}
                name="alphabetically"
                onClick={this.sortGoods}
              >
                Alphabetically
              </button>
            </div>

            <div className="button-wrapper">
              <button
                type="button"
                className={classnames(
                  'button',
                  { 'button--chosen': this.setClassName('bylength') },
                )}
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
                className={classnames(
                  'button',
                  { 'button--chosen': (isReversed && status) },
                )}
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
                      goods={goodsForDisplay1}
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

StartApp.propTypes = {
  toggleApplication: PropTypes.func.isRequired,
};

StopApp.propTypes = {
  toggleApplication: PropTypes.func.isRequired,
};
