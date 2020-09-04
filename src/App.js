import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
    isClicked: false,
  }

  mainClick = () => {
    this.setState({ isClicked: true });
  }

  render() {
    const { isClicked } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.mainClick}
          hidden={isClicked}
        >
          Start
        </button>

        <div hidden={!isClicked}>
          <GoodsList goods={goodsFromServer} />
        </div>
      </div>
    );
  }
}

export default App;
