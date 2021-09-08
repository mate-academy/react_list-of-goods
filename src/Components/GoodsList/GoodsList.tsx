import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: string[],
};

type State = {
  sortCheck: boolean;
  goodsList: string[],
};

export class GoodsList extends React.PureComponent<Props, State> {
  state = {
    sortCheck: true,
    goodsList: [...this.props.goods],
  };

  getRevers = () => {
    this.setState((currentState) => ({
      goodsList: [...currentState.goodsList].reverse(),
    }));
  };

  getAlphabetSort = () => {
    this.setState((currentState) => ({
      sortCheck: !currentState.sortCheck,
      goodsList: [...currentState.goodsList]
        .sort((a, b) => (
          currentState.sortCheck
            ? a.localeCompare(b)
            : b.localeCompare(a)
        )),
    }));
  };

  getReset = () => {
    this.setState({
      goodsList: [...this.props.goods],
    });
  };

  getLengthSort = () => {
    this.setState((currentState) => ({
      sortCheck: !currentState.sortCheck,
      goodsList: [...currentState.goodsList]
        .sort((a, b) => (
          currentState.sortCheck
            ? a.length - b.length
            : b.length - a.length
        )),
    }));
  };

  render() {
    return (
      <>
        <div className="App__buttonsList">
          <button
            className="App__button"
            type="button"
            onClick={this.getRevers}
          >
            Revers
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getAlphabetSort}
          >
            Sort alphabetically
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getReset}
          >
            Reset
          </button>
          <button
            className="App__button"
            type="button"
            onClick={this.getLengthSort}
          >
            Sort by length
          </button>
        </div>

        <ul className="goodsList">
          {this.state.goodsList.map(goods => (
            <li
              className="goodsList__item"
              key={goods}
            >
              {goods}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
