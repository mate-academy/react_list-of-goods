import React from 'react';
import './App.css';
import { Start } from './componnents/Start/Start';
import GoodsList from './componnents/GoodsList/GoodsList';

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
    isStartButtonVisible: true,
  }

  showGoodsList = () => {
    this.setState({
      isStartButtonVisible: false,
    });
  }

  render() {
    const { isStartButtonVisible } = this.state;

    return (
      <div className="App w-50 m-auto">
        {isStartButtonVisible
          ? <Start showGoodsList={this.showGoodsList} />
          : <GoodsList goods={goodsFromServer} />}
      </div>
    );
  }
}

export default App;
