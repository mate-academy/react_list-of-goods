import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    isVisible: true,
  }

  start = () => {
    setTimeout(() => {
      this.setState(state => (
        { isVisible: !state.isVisible }
      ));
    }, 500);
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {isVisible
          ? (
            <button
              type="button"
              className="btn btn_main"
              onClick={this.start}
            >
              Start
            </button>
          ) : (<GoodsList goods={goodsFromServer} />)
        }
      </div>
    );
  }
}

export default App;
