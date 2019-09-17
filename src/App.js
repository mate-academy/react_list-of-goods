import React, { Component } from 'react';
import Buttons from './Components/Buttons/Buttons';
import GoodsList from './Components/GoodList/GoodList';

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
    isStarted: true,
  };

  handleStart = () => {
    this.setState({
      isStarted: false,
    });
  };

  render() {
    const listOfGoods = [...goodsFromServer];
    const { handleStart } = this;
    const { isStarted } = this.state;

    return (
      <div className="App">
        <div className="container">
          {isStarted
            ? (
              <Buttons
                className="btn"
                text="Start"
                onClick={handleStart}
              />
            )
            : <GoodsList listOfGoods={listOfGoods} />
          }
        </div>
      </div>
    );
  }
}

export default App;
