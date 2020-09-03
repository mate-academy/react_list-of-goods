import React from 'react';
import ListOfGoods from './components/ListOfGoods';
import './App.css';

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
    isStarted: false,
  }

  isStartHandler = () => {
    this.setState({ isStarted: true });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {isStarted
          ? <ListOfGoods goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={this.isStartHandler}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
