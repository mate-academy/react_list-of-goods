import React from 'react';
import './App.css';
import Action from './components/Action';

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

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state ={
    visibility: 0,
  }

  start = () => {
    this.setState({ visibility: 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>List of goods</h1>
        {(this.state.visibility)
          ? <Action goods={goodsFromServer} />
          : <button type="button" onClick={this.start}>Start</button>}
      </div>
    );
  }
}

export default App;
