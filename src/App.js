import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList';

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
    show: false,
  }

  toggleGoodsVisibility = () => {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          hidden={show}
          onClick={this.toggleGoodsVisibility}
        >
          Start
        </button>
        {
          show && (
            <GoodList goodsFromServer={goodsFromServer} />
          )
        }
      </div>
    );
  }
}

export default App;
