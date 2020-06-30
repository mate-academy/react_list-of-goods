import React from 'react';
import './App.css';
import { goodsFromServer } from './api/goods';
import { showList } from './events/events';
import GoodsList from './modules/GoodsList';

const App = () => (
  <div className="App">

    <button
      type="button"
      onClick={showList}
      className="goodsButton"
    >
      Start
    </button>

    <section className="goodsList disable">
      <GoodsList goods={goodsFromServer} />
    </section>
  </div>
);

export default App;
