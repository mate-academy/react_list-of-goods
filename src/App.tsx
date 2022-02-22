import React from 'react';
import './App.css';
import classNames from 'classnames';

import { GoodsList } from './GoodsList';

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

type State = {
  dataServer: string[],
  visibility: boolean;
  isReverse: boolean;
  sortType: string;
  sizeFild: number;
};

class App extends React.Component<{}, State> {
  state = {
    dataServer: [...goodsFromServer],
    visibleGoods: [...goodsFromServer],
    visibility: false,
    isReverse: false,
    sortType: 'none',
    sizeFild: goodsFromServer.length,
  };

  reset = () => {
    this.setState(state => ({
      isReverse: false,
      sortType: 'none',
      sizeFild: state.dataServer.length,
    }));
  };

  render() {
    const {
      dataServer,
      visibility,
      isReverse,
      sortType,
      sizeFild,
    } = this.state;

    return (
      <div className="App">
        <div className="App__wrap">
          <h1 className="App__title">Goods</h1>
          <p className="App__subtitle">
            Length list:
            {' '}
            {sizeFild}
          </p>
          <br />

          {!visibility && (
            <button
              className="App__btn"
              type="button"
              onClick={() => {
                this.setState(state => ({
                  visibility: !state.visibility,
                }));
              }}
            >
              Start
            </button>
          )}

          {visibility && (
            <div className="App__control">
              <div className="App__list-wrap">
                <GoodsList data={{
                  dataServer,
                  isReverse,
                  sortType,
                  sizeFild,
                }}
                />
              </div>

              <input
                className="App__sizeFild"
                type="range"
                min={1}
                max={10}
                value={sizeFild}
                onChange={(event) => {
                  this.setState({
                    sizeFild: +event.target.value,
                  });
                }}
              />

              <button
                className={classNames('App__btn',
                  { 'btn-on': isReverse },
                  { 'btn-off': !isReverse })}
                type="button"
                onClick={() => {
                  this.setState(state => ({
                    ...state,
                    isReverse: !state.isReverse,
                  }));
                }}
              >
                Is revers
              </button>

              <button
                className="App__btn"
                type="button"
                onClick={() => this.reset()}
              >
                Reset
              </button>

              <button
                className={classNames('App__btn',
                  { 'btn-off': sortType !== 'alfabet' },
                  { 'btn-on': sortType === 'alfabet' })}
                type="button"
                onClick={() => {
                  this.setState(() => ({ sortType: 'alfabet' }));
                }}
              >
                Alfabet
              </button>

              <button
                className={classNames('App__btn',
                  { 'btn-off': sortType !== 'length' },
                  { 'btn-on': sortType === 'length' })}
                type="button"
                onClick={() => {
                  this.setState(() => ({ sortType: 'length' }));
                }}
              >
                Lenngth
              </button>

            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
