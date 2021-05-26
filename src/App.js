import React from 'react';
import './App.css';

import Goods from './Components/Goods';

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
    isVisible: false,
  }

  changeVisiability = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {isVisible
        && <Goods goods={goodsFromServer} />}
        {!isVisible
        && (
        <button
          type="button"
          onClick={this.changeVisiability}
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
