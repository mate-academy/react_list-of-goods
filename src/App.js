import React, { Component } from 'react';
import Button from './components/Button/Button';
import GoodsList from './components/GoodsList/GoodsList';

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

class App extends Component {
  state = {
    notStarted: true,
  };

  startedOnClick = () => {
    this.setState({
      notStarted: false,
    });
  };

  render() {
    const listOfGoods = [...goodsFromServer];
    const { startedOnClick } = this;
    const { notStarted } = this.state;

    if (!notStarted) {
      return (
        <div className="App">
          <div className="container">
            <GoodsList listOfGoods={listOfGoods} />
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container">
          <Button text="Start" onClick={startedOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
