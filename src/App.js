import React from 'react';
import './App.css';
import { goodsFromServer } from './api/goods';
import GoodsList from './modules/GoodsList';

class App extends React.Component {
  state = {
    hide: true,
  }

  showList = (event) => {
    this.setState(() => ({
      hide: false,
    }));
  };

  render() {
    if (this.state.hide === true) {
      return (
        <div className="App">

          <button
            type="button"
            onClick={this.showList}
            className="goodsButton"
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <GoodsList goods={goodsFromServer} hide={this.state.hide} />
      </div>
    );
  }
}

export default App;
