import React from 'react';
import './App.css';
import SortingGoods from './components/SortingGoods';

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
