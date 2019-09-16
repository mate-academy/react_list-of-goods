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

  handleStart = () => {
    this.setState({
      notStarted: false,
    });
  };

  render() {
    const listOfGoods = [...goodsFromServer];
    const { handleStart } = this;
    const { notStarted } = this.state;

    return (
      <div className="App">
        <div className="container">
          {notStarted && (
            <Button
              className="btn--start"
              text="Start"
              onClick={handleStart}
            />
          )}
          {!notStarted && (
            <GoodsList
              listOfGoods={listOfGoods}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
