import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

class App extends React.Component {
  state = {
    isVisible: false,
  };

  makeVisible = () => {
    this.setState({
      isVisible: true,
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        {
          isVisible
            ? (
              <Goods />
            )
            : (
              <button
                type="button"
                onClick={this.makeVisible}
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
