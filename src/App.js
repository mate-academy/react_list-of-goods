import React from 'react';
import './App.scss';
import Button from './Button';
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
  };

  handleStart = () => {
    this.setState({
      goods: [...goodsFromServer],
      shouldStart: true,
    });
  };

  onClickReset = () => {
    this.setState({ goods: [...goodsFromServer] });
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
      goods: goodsFromServer
        .filter(good => good.length >= e.target.value),
    });
  };

  render() {
    const { goods, shouldStart } = this.state;

    return (
      <div className="App">
        {!shouldStart
          ? (
            <Button handleClick={this.handleStart}>
            Start!
            </Button>
          )
          : (
            <section>
              <div
                className="buttons-wrapper"
              >
                <Button handleClick={this.onClickReverse}>Reverse</Button>
                <Button handleClick={this.onClickSortAbc}>
                  Sort alphabetically
                </Button>
                <Button handleClick={this.onClickReset}>Reset</Button>
                <Button handleClick={this.onClickSortByLen}>
                  Sort by length
                </Button>
                <Select handleClick={this.onSelectLength} />
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
