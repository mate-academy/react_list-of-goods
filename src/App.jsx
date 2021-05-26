import React from 'react';
import Goodlist from './components/Goodlist';
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
    showGoodsList: false,
  };

  toShowList = () => {
    this.setState({
      showGoodsList: true,
    });
  }

  render() {
    const { showGoodsList } = this.state;

    return (
      <div className="App">
        {showGoodsList
          ? <Goodlist goods={goodsFromServer} />
          : (
            <button
              className="button"
              type="button"
              onClick={this.toShowList}
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
