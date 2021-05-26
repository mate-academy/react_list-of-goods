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
    isListVisible: false,
  }

  showList = () => this.setState({ isListVisible: true });

  render() {
    const { isListVisible } = this.state;

    return (
      <div className="App">
        { isListVisible
          ? (
            <GoodsList goods={goodsFromServer} />
          )
          : (
            <button
              type="button"
              className="start__btn"
              onClick={this.showList}
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
