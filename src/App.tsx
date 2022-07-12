import React from 'react';
import { GoodsList } from './components/GoodsList';
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

type Props = {};

interface State {
  goods: string[];
  isReversed: boolean,
  isSortAlphabetically: boolean,
  isSortByLength: boolean,
  isReset: boolean,
  isVisible: boolean;
}

class App extends React.PureComponent<Props, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    isSortAlphabetically: false,
    isSortByLength: false,
    isReset: false,
    isVisible: false,
  };

  initialState = { ...this.state };

  activeList = (): void => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isSortAlphabetically: !prevState.isSortAlphabetically,
      isVisible: prevState.isVisible,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isSortByLength: !prevState.isSortByLength,
      isVisible: prevState.isVisible,
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      ...this.initialState,
      isReversed: !prevState.isReversed,
      isVisible: prevState.isVisible,
    }));
  };

  reset = () => {
    this.setState({
      ...this.initialState,
    });
  };

  render() {
    let preparedGoods = this.state.goods;

    if (this.state.isReset) {
      this.state = this.initialState;
    }

    if (this.state.isSortAlphabetically) {
      preparedGoods = [...preparedGoods].sort((g1, g2) => g1.localeCompare(g2));
    }

    if (this.state.isSortByLength) {
      preparedGoods = [...preparedGoods].sort((g1, g2) => g1.length - g2.length);
    }

    if (this.state.isReversed) {
      preparedGoods = [...preparedGoods].reverse();
    }

    return (
      <div className="App">
        {this.state.isVisible && <GoodsList goods={[...preparedGoods]} />}

        {this.state.isVisible ? (
          <div className="goods__config">
            <button
              className="goods__button"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="goods__button"
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              className="goods__button"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className="goods__button"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        ) : (
          <button
            className="App__button"
            type="button"
            onClick={this.activeList}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
