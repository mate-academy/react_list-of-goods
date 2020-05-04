import React from 'react';
import './App.css';
import GoodsList from './GoodList';
import { goodsFromServer } from './goodsFromServer';

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
