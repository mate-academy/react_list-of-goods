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
    firstTime: true,
  }

  start = () => {
    this.setState({ firstTime: false });
  }

  render() {
    return (
      <div className="App">
        {
        this.state.firstTime ? (
          <button type="button" onClick={this.start}>start</button>
        ) : (
          <GoodsList goods={[...goodsFromServer]} />
        )
        }
      </div>
    );
  }
}

export default App;
