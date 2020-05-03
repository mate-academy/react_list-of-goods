import React from 'react';
import './App.css';
import GoodsList from './GoodList';

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
    isVisible: true,
  }

  start = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {(this.state.isVisible)
          ? <button type="button" onClick={this.start}>Push the button</button>
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
