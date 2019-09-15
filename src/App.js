import React, { Component } from 'react';
import Goods from './components/Goods/Goods';

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
    isStartClicked: false,
  };

  changeStartState = () => this.setState(
    () => ({
      isStartClicked: true,
    })
  );

  render() {
    const { isStartClicked } = this.state;

    return (
      <div className="App">
        {
          isStartClicked
            ? <Goods goods={goodsFromServer} />
            : (
              <button
                type="submit"
                className="button button--start"
                onClick={this.changeStartState}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
