import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
    isListShown: false,
  };

  showList= () => {
    this.setState(state => ({
      isListShown: !state.isListShown,
    }));
  }

  render() {
    const { isListShown } = this.state;

    return (
      <div className="App">
        {!isListShown && (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {isListShown && (<GoodsList goods={goodsFromServer} />)
        }
      </div>
    );
  }
}

export default App;
