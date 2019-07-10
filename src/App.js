import React from 'react';
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
  constructor() {
    super();
    this.state = {
      isStarted: false,
      goodsCurrent: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isStarted: true,
      goodsCurrent: goodsFromServer,
    });
  }

  render() {
    if (this.state.isStarted === false) {
      return (
        <button onClick={this.handleClick} type="button">Start</button>
      );
    }
    return (

      <div className="App">
        <ul>
          {this.state.goodsCurrent.map(item => (<li>{item}</li>))}
        </ul>
      </div>
    );
  }
}

export default App;
