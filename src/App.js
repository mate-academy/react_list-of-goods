import React from 'react';
import './App.scss';
import Filter from './Filter';
import Select from './Select';
import GoodList from './GoodList';

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

class App extends React.Component {
  state = {
    goods: [],
    shouldStart: false,
    minLength: 1,
  };

  handleStart = () => {
    this.setState({
      goods: [...goodsFromServer],
      shouldStart: true,
    });
  };

  onClickReset = () => {
    this.setState({ goods: [...goodsFromServer], minLength: 1 });
  };

  onClickReverse = () => {
    this.setState(prevState => ({ goods: [...prevState.goods].reverse() }));
  };

  onClickSortAbc = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  onClickSortByLen = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  onSelectLength = (e) => {
    this.setState({
      minLength: e.target.value,
      goods: goodsFromServer
        .filter(good => good.length >= e.target.value),
    });
  };

  render() {
    const { goods, shouldStart, minLength } = this.state;

    return (
      <div className="App">
        {!shouldStart
          ? (
            <Filter handleClick={this.handleStart}>
            Start!
            </Filter>
          )
          : (
            <section>
              <div
                className="buttons-wrapper"
              >
                <Filter handleClick={this.onClickReverse}>Reverse</Filter>
                <Filter handleClick={this.onClickSortAbc}>
                  Sort alphabetically
                </Filter>
                <Filter handleClick={this.onClickReset}>Reset</Filter>
                <Filter handleClick={this.onClickSortByLen}>
                  Sort by length
                </Filter>
                <Select
                  handleClick={this.onSelectLength}
                  currentValue={minLength}
                />
              </div>
              <GoodList goodList={goods} />
            </section>
          )
        }
      </div>
    );
  }
}

export default App;
