import React from 'react';
import { GoodsList } from './Components/GoodsList';

import './App.css';

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

interface State {
  goodsList: string[];
  getStart: boolean;
  isReversed: boolean;
  sortBy: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
    isReversed: false,
    getStart: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  checkStatus = (list: string[]) => {
    if (this.state.sortBy) {
      list.sort((first, second) => {
        switch (this.state.sortBy) {
          case 'alphabetically':
            return first.localeCompare(second);

          case 'sortByLength':
            return first.length - second.length;

          default:
            return 0;
        }
      });
    }

    if (this.state.isReversed) {
      list.reverse();
    }
  };

  start = () => {
    this.setState({ getStart: true });
  };

  render() {
    const { goodsList, getStart } = this.state;

    const showList = [...goodsList];

    this.checkStatus(showList);

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {!getStart && (
          <button
            type="button"
            className="button-start"
            onClick={this.start}
          >
            Let&apos;s start!
          </button>
        )}

        <div className="content">

          <div className="goods">
            {getStart && (<GoodsList list={showList} />)}
          </div>

          {getStart && (
            <div className="buttons">
              <div className="buttons__group">
                <button
                  type="button"
                  className="button-sort"
                  onClick={() => (this.setState({
                    sortBy: 'alphabetically',
                  }))}
                >
                  Sort by alphabeticall
                </button>

                <button
                  type="button"
                  className="button-sort"
                  onClick={() => (this.setState({
                    sortBy: 'sortByLength',
                  }))}
                >
                  Sort by length
                </button>
              </div>

              <div className="buttons__group">
                <button
                  type="button"
                  className="button-reverse"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button-reset"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    );
  }
}
