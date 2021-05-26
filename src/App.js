import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

  start = () => {
    this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        {!isVisible
          && (
          <button
            type="button"
            className="App__button-open"
            onClick={this.start}
          >
            Start
          </button>
          )
        }

        {isVisible
          && (
            <GoodsList goods={goodsFromServer} />
          )
        }
      </div>
    );
  }
}

export default App;
