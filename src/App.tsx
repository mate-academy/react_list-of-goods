/* eslint-disable @typescript-eslint/no-unused-vars */
import 'bulma/css/bulma.min.css';
import React from 'react';
import { Button } from 'react-bulma-components';
import './App.scss';
import { GoodList, Product } from './components/GoodList';
import { goodsFromServer } from './data/goodsFromServer';

type Props = {};

interface State {
  isStarted: boolean,
  goods: Product[],
}

export class App extends React.Component<Props, State> {
  state: State = {
    isStarted: false,
    goods: goodsFromServer,
  };

  start = () => {
    this.setState({
      isStarted: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (product1, product2) => product1.value.localeCompare(product2.value),
      ),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (product1, product2) => product1.value.length - product2.value.length,
      ),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods, isStarted } = this.state;

    return (
      <div className="app">
        {isStarted
          ? (
            <>
              <h1 className="app__title">Goods</h1>

              <div className="buttons">
                <Button
                  color="info"
                  type="button"
                  onClick={this.reverse}
                  className="button"
                >
                  Reverse
                </Button>

                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="button"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="button"
                >
                  Sort by length
                </button>

                <Button
                  color="danger"
                  type="button"
                  onClick={this.reset}
                  className="button"
                >
                  Reset
                </Button>
              </div>

              <div className="app__list">
                <GoodList goods={goods} />
              </div>

            </>
          )
          : (
            <Button
              color="primary"
              type="button"
              onClick={this.start}
              className="button"
            >
              Start
            </Button>
          )}
      </div>
    );
  }
}
