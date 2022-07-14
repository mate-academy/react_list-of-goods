import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { goodsFromServer } from './api/goods';

type State = {
  goods: string[],
  lengthLimit: number,
  minLength: number,
  isReverse: boolean,
  sortBy: string,
  selected: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lengthLimit: 0,
    minLength: -1,
    goods: goodsFromServer,
    isReverse: false,
    sortBy: '',
    selected: 1,
  };

  showAll = () => {
    this.setState((state) => ({
      ...state,
      lengthLimit: -1,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReverse: !state.isReverse,
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      ...state,
      sortBy: 'length',
    }));
  };

  sortByName = () => {
    this.setState((state) => ({
      ...state,
      sortBy: 'name',
    }));
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReverse: false,
      lengthLimit: -1,
    });
  };

  cutByLength = (
    _event: MouseEvent,
    num: number,
  ) => {
    this.setState((state) => ({
      ...state,
      lengthLimit: state.lengthLimit + num,
    }));
  };

  render(): React.ReactNode {
    const {
      goods,
      isReverse,
      sortBy,
      lengthLimit,
      minLength,
    } = this.state;

    const visibleGoods = goods.filter(good => {
      if (minLength > -1) {
        return good.length >= minLength;
      }

      if (lengthLimit === -1) {
        return true;
      }

      return good.length <= lengthLimit;
    });

    visibleGoods.sort((f1, f2) => {
      switch (sortBy) {
        case 'length':
          return f1.length - f2.length;
        case 'name':
          return f1.localeCompare(f2);
        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <GoodsList
          goods={visibleGoods}
        />

        {(visibleGoods.length > 0 && (
          <div className="level">
            <button
              className="button is-danger"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              className="button is-warning"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              className="button is-info"
              type="button"
              onClick={this.sortByLength}
            >
              Length
            </button>

            <button
              className="button is-success"
              type="button"
              onClick={this.sortByName}
            >
              Name
            </button>
          </div>
        )) || (
          <div className="main-buttons">
            <button
              className="button is-primary is-rounded main-buttons__item"
              type="button"
              onClick={this.showAll}
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
