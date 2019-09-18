import React from 'react';
import ListOfGoods from './components/ListOfGoods';
import './App.css';

class App extends React.Component {
  state = {
    isHidden: true,
  }

  handleStart = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }));
  }

  render() {
    const { isHidden } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.handleStart}
          className={
            isHidden
              ? 'button-active'
              : 'button-hidden'
          }
        >
          Start
        </button>

        <div
          className={
            isHidden
              ? 'content-hidden'
              : 'content-show'
          }
        >
          <ListOfGoods />
        </div>
      </div>
    );
  }
}

export default App;
