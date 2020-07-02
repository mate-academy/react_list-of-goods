import React from 'react';
import './App.css';
import { goodsFromServer } from './api/goods';
import GoodsList from './modules/GoodsList';

class App extends React.Component {
  state = {
    hide: true,
  }

  showList = (event) => {
    event.target.classList.add('disable');

    this.setState(() => ({
      hide: false,
    }));
  };

  render() {
    return (
      <div className="App">

        <button
          type="button"
          onClick={this.showList}
          className="goodsButton"
        >
          Start
        </button>
        <section className="goodsList">
          <GoodsList goods={goodsFromServer} hide={this.state.hide} />
        </section>
      </div>
    );
  }
}

export default App;
