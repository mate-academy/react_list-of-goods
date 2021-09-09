import { Component } from 'react';

import List from './List';

import './App.scss';

type State = {
  isReady: boolean;
};

class App extends Component {
  state: State = {
    isReady: true,
  };

  start = () => {
    this.setState({
      isReady: false,
    });
  };

  render() {
    const { isReady } = this.state;

    return (isReady
      ? <button type="button" className="button btn btn btn-outline-primary" onClick={this.start}>Start</button>
      : <List />
    );
  }
}

export default App;
