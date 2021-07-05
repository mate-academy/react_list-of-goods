import React from 'react';
import './App.css';
import SortingGoods from './components/SortingGoods';
import { goodsFromServer } from './components/goodsFromServer';

class App extends React.Component {
  state = {
    isVisible: true,
  };

  activeMenu = () => {
    this.setState({
      isVisible: false,
    });
  }

  render() {
    const { isVisible } = this.state;

    return (
      <>
        {isVisible ? (
          <button
            type="button"
            onClick={this.activeMenu}
          >
            Start
          </button>
        ) : (
          <SortingGoods goods={goodsFromServer} />
        )}
      </>
    );
  }
}

export default App;
