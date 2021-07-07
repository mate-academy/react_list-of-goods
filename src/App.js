import React from 'react';
import './App.css';

import { SortList } from './components/SortList';

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
    isActive: false,
  };

  render() {
    const { isActive } = this.state;

    return (
      <div className="App">
        {!isActive ? (
          <button
            type="button"
            className="button--start"
            onClick={() => this.setState({
              isActive: true,
            })}
          >
            Let&apos;s start!
          </button>
        ) : <SortList goods={goodsFromServer} />
        }
      </div>
    );
  }
}

export default App;
