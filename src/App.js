import React, { Component } from 'react';

import './App.scss';

import ListWithButtons from './components/ListWithButtons';
import Button from './components/Button';

class App extends Component {
  state = { isInitialized: false }

  handleIntialization = () => {
    this.setState({ isInitialized: true });
  }

  render() {
    const { isInitialized } = this.state;

    return (
      <div className="App">
        <h1 className="main-title">List Of Goods</h1>
        {isInitialized
          ? <ListWithButtons />
          : (
            <Button onClick={this.handleIntialization}>
              Start
            </Button>
          )
        }
      </div>
    );
  }
}

export default App;
