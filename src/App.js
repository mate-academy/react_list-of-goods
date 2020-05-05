import React from 'react';
import './App.css';
import { GoodsList, goodsFromServer } from './Components/GoodList/GoodList';

class App extends React.Component {
  state = {
    isToggleOn: false,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.isToggleOn
          ? (
            <GoodsList
              goods={goodsFromServer}
            />
          )
          : (
            <button
              type="button"
              onClick={() => (
                this.setState({ isToggleOn: true })
              )}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
