import React from 'react';
import './App.css';
import GoodsList from './GoodList';

export const goodsFromServer = [
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
    clicked: false,
  }

  StartClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    const startButtonClicked = this.state.clicked;

    return (
      <div className="App">
        {startButtonClicked
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              className="button button__start"
              type="button"
              onClick={this.StartClick}
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
