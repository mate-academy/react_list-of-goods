import React from 'react';
import './App.css';

import GoodList from './components/GoodList';

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
    load: false,
  }

  click = () => {
    this.setState({
      load: true,
    });
  }

  render() {
    const { load } = this.state;

    return (
      <div className="App">
        {load ? (<GoodList goodList={goodsFromServer} />) : (
          <button
            type="button"
            onClick={this.click}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
