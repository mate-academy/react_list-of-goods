import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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
    isToggleOn: false,
  }

  toggleStart = () => {
    this.setState({ isToggleOn: true });
  }

  render() {
    const startButtonActive = this.state.isToggleOn;

    return (
      <div>
        {startButtonActive
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button onClick={this.toggleStart} type="button">
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
