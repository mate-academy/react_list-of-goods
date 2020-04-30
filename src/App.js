import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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
    isHide: true,
    isShow: false,
  };

  toggle = () => {
    this.setState(state => ({
      isHide: !state.isHide, isShow: !state.isShow,
    }));
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          {goodsFromServer.length}
        </div>
        {this.state.isShow && (<GoodsList items={goodsFromServer} />)}
        {this.state.isHide
          && (<button type="button" onClick={this.toggle}>Start</button>)}
      </>
    );
  }
}

export default App;
