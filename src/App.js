import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    listIsVisible: false,
  }

  start = () => {
    this.setState({ listIsVisible: true });
  }

  render() {
    const { listIsVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!listIsVisible
          && (
            <button
              onClick={this.start}
              type="button"
            >
              Start
            </button>
          )
        }
        {listIsVisible && (<GoodsList goods={goodsFromServer} />)}
      </div>
    );
  }
}

export default App;
