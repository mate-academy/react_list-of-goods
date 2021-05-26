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

class App extends React.PureComponent {
  state = {
    isVisible: false,
  }

  showList = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <GoodsList goods={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
