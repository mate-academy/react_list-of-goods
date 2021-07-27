import React from 'react';
import './App.css';
import { Button } from './components/Button';
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
    listIsVisible: false,
  }

  showList = () => {
    this.setState(state => ({
      listIsVisible: !state.listIsVisible,
    }));
  }

  render() {
    return this.state.listIsVisible ? (
      <GoodsList goods={goodsFromServer} />
    ) : (
      <Button
        onClick={this.showList}
        text="Start"
      />
    );
  }
}

export default App;
