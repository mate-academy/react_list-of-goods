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
    isClicked: false,
  }

  click = () => {
    this.setState({
      isClicked: true,
    });
  }

  render() {
    const { isClicked } = this.state;

    return (
      <div className="App">
        {!isClicked
          ? (
            <button
              type="button"
              onClick={this.click}
            >
              Start
            </button>
          )
          : (
            <GoodsList goods={goodsFromServer} />
          )}
      </div>
    );
  }
}

export default App;
