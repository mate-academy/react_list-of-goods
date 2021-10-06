import React from 'react';
import './App.css';
import { StartButton } from './components/StartButton';
import { GoodsVisible } from './components/GoodsVisible';
import { ReverseButton } from './components/ReverseButton';
import { SortByAlph } from './components/SortByAlph';
import { SortByLength } from './components/SortByLength';
import { ResetButton } from './components/ResetButton';

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
  isStarted: boolean;
  isReversed: boolean;
  sortBy: string;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isStarted: false,
      isReversed: false,
      sortBy: '',
    });
  };

  sortByAplh = () => {
    this.setState({ sortBy: 'alph' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const {
      goods,
      isReversed,
      isStarted,
      sortBy,
    } = this.state;
    let copyOfGoods = [...goods];

    switch (sortBy) {
      case 'alph':
        copyOfGoods.sort((a, b) => a.localeCompare(b));
        break;

      case 'length':
        copyOfGoods.sort((a, b) => a.length - b.length);
        break;

      default:
        copyOfGoods = [...goods];
    }

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {/* {goodsFromServer.length} */}

        {!isStarted
          ? <div><StartButton start={this.start} /></div>
          : (
            <>
              <div className="btn-group">
                <ReverseButton reverse={this.reverse} />
                <SortByAlph alph={this.sortByAplh} />
                <SortByLength length={this.sortByLength} />
                <ResetButton reset={this.reset} />
              </div>
              <GoodsVisible listGoods={copyOfGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
