import React from 'react';
import './App.css';
import List from './List';

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
    showButton: true,
    showList: false,
  }

  showList = () => {
    this.setState({
      showList: true,
    });
    this.hideButton();
  }

  hideButton = () => {
    this.setState({
      showButton: false,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showButton && (
          <button type="button" onClick={this.showList}>
            Start
          </button>
        )}
        {this.state.showList && (
          <List content={goodsFromServer} />
        )}
      </div>
    );
  }
}

export default App;
