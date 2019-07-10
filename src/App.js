import React from 'react';
import GoodList from './GoodList';
import LoadButton from "./LoadButton";
import './App.css'

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
    isLoaded: false,
    goods: [],
    goodsCopy: goodsFromServer,
  }

  handleOnClick = () => {
    this.setState({
      goods: goodsFromServer,
      goodsCopy: goodsFromServer,
      isLoaded: true,
    })
  }
  render() {
    return (
      <div className="App">
        <LoadButton onClick={this.handleOnClick} />
          <GoodList goods={this.state.goodsCopy} key ={this.state.goodsCopy} />
      </div>
    )
  }
}

export default App;
