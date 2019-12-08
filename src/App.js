import React from 'react';
import GoodsList from './GoodsList';
import './App.css';

class App extends React.Component {
  state = { isClicked: false }

  buttonStart = () => {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return <GoodsList />;
    }

    return (
      <button
        type="button"
        className={this.state.isClicked ? 'button--hide' : 'button'}
        onClick={this.buttonStart}
      >
        Start
      </button>
    );
  }
}

export default App;
