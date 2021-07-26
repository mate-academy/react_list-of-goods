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
    hide: true,
  }

  hide = () => (
    this.setState({ hide: false })
  );

  render() {
    const { hide } = this.state;

    return (
      <div className="App">
        {
          hide === true
          && (
          <button
            type="button"
            onClick={this.hide}
            className="hide"
          >
            Start
          </button>
          )
        }
        {hide !== true && <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
