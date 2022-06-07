import React from 'react';
import './App.scss';

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
  goods: string[];
  isVisibleList: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisibleList: false,
  };

  showList = () => {
    this.setState((state) => ({
      isVisibleList: !state.isVisibleList,
    }));
  };

  getReverseGoodsList = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  getSortAlphabetGoodsList = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  getSortLengthGoodsList = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  getResetGoodsList = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { goods, isVisibleList } = this.state;

    return (
      <div className="App">
        <h1 className="mainTitle title">
          Goods
        </h1>

        {!isVisibleList
          ? (
            <button
              type="button"
              className="
                button
                is-success
                btn
                btn--center
              "
              onClick={this.showList}
            >
              Start
            </button>
          ) : (
            <ul className="list list__wrapper">
              {goods.map(good => (
                <li className="list__item" key={good}>
                  {good}
                </li>
              ))}

              <div className="buttonWrapper">
                <button
                  type="button"
                  className="button is-info btn"
                  onClick={this.getReverseGoodsList}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-info btn"
                  onClick={this.getSortAlphabetGoodsList}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-info btn"
                  onClick={this.getSortLengthGoodsList}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-warning btn"
                  onClick={this.getResetGoodsList}
                >
                  Reset
                </button>
              </div>

              <button
                type="button"
                className="button is-danger btn btn--center"
                onClick={this.showList}
              >
                Hide List
              </button>
            </ul>
          )}
      </div>
    );
  }
}
